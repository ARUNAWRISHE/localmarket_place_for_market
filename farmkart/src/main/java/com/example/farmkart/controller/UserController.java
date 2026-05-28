package com.example.farmkart.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.farmkart.dto.user.AddressRequest;
import com.example.farmkart.dto.user.AddressResponse;
import com.example.farmkart.dto.user.UpdateProfileRequest;
import com.example.farmkart.dto.user.UserProfileResponse;
import com.example.farmkart.service.UserService;
import com.example.farmkart.util.ApiResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {
	private final UserService userService;

	@GetMapping("/profile")
	public ResponseEntity<ApiResponse<UserProfileResponse>> profile() {
		return ResponseEntity.ok(ApiResponse.ok("Profile fetched", userService.getProfile()));
	}

	@PutMapping("/profile")
	public ResponseEntity<ApiResponse<UserProfileResponse>> updateProfile(
			@Validated @RequestBody UpdateProfileRequest request) {
		return ResponseEntity.ok(ApiResponse.ok("Profile updated", userService.updateProfile(request)));
	}

	@PostMapping("/address")
	public ResponseEntity<ApiResponse<AddressResponse>> addAddress(
			@Validated @RequestBody AddressRequest request) {
		return ResponseEntity.ok(ApiResponse.ok("Address added", userService.addAddress(request)));
	}

	@GetMapping("/address")
	public ResponseEntity<ApiResponse<List<AddressResponse>>> listAddresses() {
		return ResponseEntity.ok(ApiResponse.ok("Addresses fetched", userService.getAddresses()));
	}
}
