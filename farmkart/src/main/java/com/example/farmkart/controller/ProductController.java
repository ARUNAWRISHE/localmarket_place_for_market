package com.example.farmkart.controller;

import java.util.UUID;

import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.farmkart.dto.product.ProductRequest;
import com.example.farmkart.dto.product.ProductResponse;
import com.example.farmkart.service.ProductService;
import com.example.farmkart.util.ApiResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
public class ProductController {
	private final ProductService productService;

	@PostMapping
	public ResponseEntity<ApiResponse<ProductResponse>> create(@Validated @RequestBody ProductRequest request) {
		return ResponseEntity.ok(ApiResponse.ok("Product created", productService.create(request)));
	}

	@PutMapping("/{id}")
	public ResponseEntity<ApiResponse<ProductResponse>> update(@PathVariable UUID id,
			@Validated @RequestBody ProductRequest request) {
		return ResponseEntity.ok(ApiResponse.ok("Product updated", productService.update(id, request)));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<ApiResponse<Object>> delete(@PathVariable UUID id) {
		productService.delete(id);
		return ResponseEntity.ok(ApiResponse.ok("Product deleted", null));
	}

	@GetMapping
	public ResponseEntity<ApiResponse<Page<ProductResponse>>> list(
			@RequestParam(defaultValue = "0") int page,
			@RequestParam(defaultValue = "20") int size) {
		return ResponseEntity.ok(ApiResponse.ok("Products fetched", productService.list(page, size)));
	}

	@GetMapping("/{id}")
	public ResponseEntity<ApiResponse<ProductResponse>> getById(@PathVariable UUID id) {
		return ResponseEntity.ok(ApiResponse.ok("Product fetched", productService.getById(id)));
	}

	@GetMapping("/search")
	public ResponseEntity<ApiResponse<Page<ProductResponse>>> search(@RequestParam String q,
			@RequestParam(defaultValue = "0") int page,
			@RequestParam(defaultValue = "20") int size) {
		return ResponseEntity.ok(ApiResponse.ok("Search results", productService.search(q, page, size)));
	}

	@GetMapping("/category/{id}")
	public ResponseEntity<ApiResponse<Page<ProductResponse>>> byCategory(@PathVariable UUID id,
			@RequestParam(defaultValue = "0") int page,
			@RequestParam(defaultValue = "20") int size) {
		return ResponseEntity.ok(ApiResponse.ok("Category products", productService.listByCategory(id, page, size)));
	}
}
