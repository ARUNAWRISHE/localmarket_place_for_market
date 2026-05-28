package com.example.farmkart.dto.auth;

import java.util.Map;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AuthResponse {
	private String token;
	private String accessToken;
	private String refreshToken;
	private String tokenType;
	private String role;
	private Map<String, Object> user;
}
