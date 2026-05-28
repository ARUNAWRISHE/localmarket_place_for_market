package com.example.farmkart.service;

import com.example.farmkart.dto.auth.AuthResponse;
import com.example.farmkart.dto.auth.LoginRequest;
import com.example.farmkart.dto.auth.LogoutRequest;
import com.example.farmkart.dto.auth.RefreshRequest;
import com.example.farmkart.dto.auth.RegisterRequest;

public interface AuthService {
	AuthResponse register(RegisterRequest request);
	AuthResponse login(LoginRequest request);
	AuthResponse refresh(RefreshRequest request);
	void logout(LogoutRequest request);
}
