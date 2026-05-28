package com.example.farmkart.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.farmkart.dto.admin.AdminUserResponse;
import com.example.farmkart.service.AdminService;
import com.example.farmkart.util.ApiResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {
	private final AdminService adminService;

	@GetMapping("/users")
	public ResponseEntity<ApiResponse<List<AdminUserResponse>>> users() {
		return ResponseEntity.ok(ApiResponse.ok("Users fetched", adminService.users()));
	}

	@GetMapping("/sellers")
	public ResponseEntity<ApiResponse<List<AdminUserResponse>>> sellers() {
		return ResponseEntity.ok(ApiResponse.ok("Sellers fetched", adminService.sellers()));
	}

	@PutMapping("/seller/verify/{id}")
	public ResponseEntity<ApiResponse<Object>> verifySeller(@PathVariable UUID id) {
		adminService.verifySeller(id);
		return ResponseEntity.ok(ApiResponse.ok("Seller verified", null));
	}

	@DeleteMapping("/products/{id}")
	public ResponseEntity<ApiResponse<Object>> deleteProduct(@PathVariable UUID id) {
		adminService.deleteProduct(id);
		return ResponseEntity.ok(ApiResponse.ok("Product removed", null));
	}
}
