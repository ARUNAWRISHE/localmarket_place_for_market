package com.example.farmkart.controller;

import java.util.UUID;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.farmkart.dto.cart.AddToCartRequest;
import com.example.farmkart.dto.cart.CartResponse;
import com.example.farmkart.dto.cart.UpdateCartItemRequest;
import com.example.farmkart.service.CartService;
import com.example.farmkart.util.ApiResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/cart")
@RequiredArgsConstructor
public class CartController {
	private final CartService cartService;

	@PostMapping("/add")
	public ResponseEntity<ApiResponse<CartResponse>> add(@Validated @RequestBody AddToCartRequest request) {
		return ResponseEntity.ok(ApiResponse.ok("Item added", cartService.add(request)));
	}

	@PutMapping("/update")
	public ResponseEntity<ApiResponse<CartResponse>> update(@Validated @RequestBody UpdateCartItemRequest request) {
		return ResponseEntity.ok(ApiResponse.ok("Cart updated", cartService.update(request)));
	}

	@DeleteMapping("/remove/{id}")
	public ResponseEntity<ApiResponse<Object>> remove(@PathVariable UUID id) {
		cartService.remove(id);
		return ResponseEntity.ok(ApiResponse.ok("Item removed", null));
	}

	@GetMapping
	public ResponseEntity<ApiResponse<CartResponse>> get() {
		return ResponseEntity.ok(ApiResponse.ok("Cart fetched", cartService.get()));
	}
}
