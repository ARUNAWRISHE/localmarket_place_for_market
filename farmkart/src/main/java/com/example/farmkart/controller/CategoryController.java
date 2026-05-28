package com.example.farmkart.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.farmkart.dto.category.CategoryRequest;
import com.example.farmkart.dto.category.CategoryResponse;
import com.example.farmkart.service.CategoryService;
import com.example.farmkart.util.ApiResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/categories")
@RequiredArgsConstructor
public class CategoryController {
	private final CategoryService categoryService;

	@PostMapping
	public ResponseEntity<ApiResponse<CategoryResponse>> create(@Validated @RequestBody CategoryRequest request) {
		return ResponseEntity.ok(ApiResponse.ok("Category created", categoryService.create(request)));
	}

	@GetMapping
	public ResponseEntity<ApiResponse<List<CategoryResponse>>> list() {
		return ResponseEntity.ok(ApiResponse.ok("Categories fetched", categoryService.list()));
	}
}
