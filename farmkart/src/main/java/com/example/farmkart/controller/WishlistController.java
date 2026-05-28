package com.example.farmkart.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.farmkart.dto.wishlist.WishlistRequest;
import com.example.farmkart.dto.wishlist.WishlistResponse;
import com.example.farmkart.service.WishlistService;
import com.example.farmkart.util.ApiResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/wishlist")
@RequiredArgsConstructor
public class WishlistController {
	private final WishlistService wishlistService;

	@PostMapping
	public ResponseEntity<ApiResponse<WishlistResponse>> add(@Validated @RequestBody WishlistRequest request) {
		return ResponseEntity.ok(ApiResponse.ok("Wishlist updated", wishlistService.add(request)));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<ApiResponse<Object>> remove(@PathVariable UUID id) {
		wishlistService.remove(id);
		return ResponseEntity.ok(ApiResponse.ok("Wishlist item removed", null));
	}

	@GetMapping
	public ResponseEntity<ApiResponse<List<WishlistResponse>>> list() {
		return ResponseEntity.ok(ApiResponse.ok("Wishlist fetched", wishlistService.list()));
	}
}
