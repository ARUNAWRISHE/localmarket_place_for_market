package com.example.farmkart.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.farmkart.dto.auth.AuthResponse;
import com.example.farmkart.dto.auth.LoginRequest;
import com.example.farmkart.dto.auth.LogoutRequest;
import com.example.farmkart.dto.auth.RefreshRequest;
import com.example.farmkart.dto.auth.RegisterRequest;
import com.example.farmkart.service.AuthService;
import com.example.farmkart.util.ApiResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
	private final AuthService authService;

	@PostMapping("/register")
	public ResponseEntity<ApiResponse<AuthResponse>> register(@Validated @RequestBody RegisterRequest request) {
		return ResponseEntity.ok(ApiResponse.ok("Registration successful", authService.register(request)));
	}

	@PostMapping("/login")
	public ResponseEntity<ApiResponse<AuthResponse>> login(@Validated @RequestBody LoginRequest request) {
		return ResponseEntity.ok(ApiResponse.ok("Login successful", authService.login(request)));
	}

	@PostMapping("/refresh")
	public ResponseEntity<ApiResponse<AuthResponse>> refresh(@Validated @RequestBody RefreshRequest request) {
		return ResponseEntity.ok(ApiResponse.ok("Token refreshed", authService.refresh(request)));
	}

	@PostMapping("/logout")
	public ResponseEntity<ApiResponse<Object>> logout(@Validated @RequestBody LogoutRequest request) {
		authService.logout(request);
		return ResponseEntity.ok(ApiResponse.ok("Logged out", null));
	}
}
