package com.example.farmkart.security;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.time.Instant;
import java.util.Date;

import org.springframework.stereotype.Service;

import com.example.farmkart.config.JwtProperties;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.KeyException;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class JwtService {
	private final JwtProperties properties;

	public String generateAccessToken(String subject) {
		Instant now = Instant.now();
		Instant expires = now.plusSeconds(properties.getAccessTokenTtlMinutes() * 60);
		return Jwts.builder()
				.setIssuer(properties.getIssuer())
				.setSubject(subject)
				.setIssuedAt(Date.from(now))
				.setExpiration(Date.from(expires))
				.signWith(signingKey(), SignatureAlgorithm.HS256)
				.compact();
	}

	public String generateRefreshToken(String subject) {
		Instant now = Instant.now();
		Instant expires = now.plusSeconds(properties.getRefreshTokenTtlDays() * 24 * 3600);
		return Jwts.builder()
				.setIssuer(properties.getIssuer())
				.setSubject(subject)
				.setIssuedAt(Date.from(now))
				.setExpiration(Date.from(expires))
				.signWith(signingKey(), SignatureAlgorithm.HS256)
				.compact();
	}

	public String extractUsername(String token) {
		return getClaims(token).getSubject();
	}

	public boolean isTokenValid(String token) {
		try {
			Claims claims = getClaims(token);
			return claims.getExpiration().after(new Date());
		} catch (Exception ex) {
			return false;
		}
	}

	private Claims getClaims(String token) {
		return Jwts.parserBuilder()
				.setSigningKey(signingKey())
				.build()
				.parseClaimsJws(token)
				.getBody();
	}

	private Key signingKey() {
		try {
			return Keys.hmacShaKeyFor(properties.getSecret().getBytes(StandardCharsets.UTF_8));
		} catch (KeyException ex) {
			throw new IllegalStateException("JWT_SECRET must be at least 32 characters for HS256", ex);
		}
	}
}
