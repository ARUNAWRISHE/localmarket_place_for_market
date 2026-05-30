package com.example.farmkart.service.impl;

import java.time.Instant;
import java.util.Map;

import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.farmkart.dto.auth.AuthResponse;
import com.example.farmkart.dto.auth.LoginRequest;
import com.example.farmkart.dto.auth.LogoutRequest;
import com.example.farmkart.dto.auth.RefreshRequest;
import com.example.farmkart.dto.auth.RegisterRequest;
import com.example.farmkart.constants.Role;
import com.example.farmkart.entity.RefreshToken;
import com.example.farmkart.entity.User;
import com.example.farmkart.exception.BadRequestException;
import com.example.farmkart.exception.NotFoundException;
import com.example.farmkart.repository.RefreshTokenRepository;
import com.example.farmkart.repository.UserRepository;
import com.example.farmkart.security.JwtService;
import com.example.farmkart.service.AuthService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
	private final UserRepository userRepository;
	private final RefreshTokenRepository refreshTokenRepository;
	private final PasswordEncoder passwordEncoder;
	private final JwtService jwtService;

	@Override
	public AuthResponse register(RegisterRequest request) {
		userRepository.findByEmail(request.getEmail()).ifPresent(user -> {
			throw new BadRequestException("Email already registered");
		});

		User user = new User();
		user.setFullName(request.getFullName());
		user.setEmail(request.getEmail());
		user.setPhone(request.getPhone());
		user.setPasswordHash(passwordEncoder.encode(request.getPassword()));
		user.setRoles(request.getRoles());
		user.setRole(request.getRoles().stream().findFirst().orElse(Role.CUSTOMER));
		userRepository.save(user);

		String accessToken = jwtService.generateAccessToken(user.getEmail());
		String refreshTokenValue = jwtService.generateRefreshToken(user.getEmail());
		saveRefreshToken(user, refreshTokenValue);

		return AuthResponse.builder()
				.token(accessToken)
				.accessToken(accessToken)
				.refreshToken(refreshTokenValue)
				.tokenType("Bearer")
				.role(primaryRole(user))
				.user(userPayload(user))
				.build();
	}

	@Override
	public AuthResponse login(LoginRequest request) {
		User user = userRepository.findByEmail(request.getEmail())
				.orElseThrow(() -> new NotFoundException("User not found"));
		verifyPassword(request.getPassword(), user);

		String accessToken = jwtService.generateAccessToken(user.getEmail());
		String refreshTokenValue = jwtService.generateRefreshToken(user.getEmail());
		saveRefreshToken(user, refreshTokenValue);

		return AuthResponse.builder()
				.token(accessToken)
				.accessToken(accessToken)
				.refreshToken(refreshTokenValue)
				.tokenType("Bearer")
				.role(primaryRole(user))
				.user(userPayload(user))
				.build();
	}

	@Override
	public AuthResponse refresh(RefreshRequest request) {
		RefreshToken stored = refreshTokenRepository.findByToken(request.getRefreshToken())
				.orElseThrow(() -> new BadRequestException("Invalid refresh token"));
		if (stored.isRevoked() || stored.getExpiresAt().isBefore(Instant.now())) {
			throw new BadRequestException("Refresh token expired");
		}

		String accessToken = jwtService.generateAccessToken(stored.getUser().getEmail());
		String refreshTokenValue = jwtService.generateRefreshToken(stored.getUser().getEmail());
		stored.setRevoked(true);
		refreshTokenRepository.save(stored);
		saveRefreshToken(stored.getUser(), refreshTokenValue);

		return AuthResponse.builder()
				.token(accessToken)
				.accessToken(accessToken)
				.refreshToken(refreshTokenValue)
				.tokenType("Bearer")
				.role(primaryRole(stored.getUser()))
				.user(userPayload(stored.getUser()))
				.build();
	}

	@Override
	public void logout(LogoutRequest request) {
		RefreshToken stored = refreshTokenRepository.findByToken(request.getRefreshToken())
				.orElseThrow(() -> new BadRequestException("Invalid refresh token"));
		stored.setRevoked(true);
		refreshTokenRepository.save(stored);
	}

	private void saveRefreshToken(User user, String token) {
		RefreshToken refreshToken = new RefreshToken();
		refreshToken.setUser(user);
		refreshToken.setToken(token);
		refreshToken.setExpiresAt(Instant.now().plusSeconds(30L * 24 * 3600));
		refreshTokenRepository.save(refreshToken);
	}

	private void verifyPassword(String rawPassword, User user) {
		if (passwordEncoder.matches(rawPassword, user.getPasswordHash())) {
			return;
		}

		if (rawPassword.equals(user.getPasswordHash())) {
			user.setPasswordHash(passwordEncoder.encode(rawPassword));
			userRepository.save(user);
			return;
		}

		throw new BadCredentialsException("Invalid email or password");
	}

	private String primaryRole(User user) {
		return user.getRoles().stream()
				.findFirst()
				.map(Role::name)
				.orElse(Role.CUSTOMER.name());
	}

	private Map<String, Object> userPayload(User user) {
		return Map.of(
				"id", user.getId(),
				"fullName", user.getFullName(),
				"email", user.getEmail(),
				"roles", user.getRoles());
	}
}
