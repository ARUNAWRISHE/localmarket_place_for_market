package com.example.farmkart.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.farmkart.dto.review.DeliveryReviewRequest;
import com.example.farmkart.dto.review.ProductReviewRequest;
import com.example.farmkart.dto.review.ReviewResponse;
import com.example.farmkart.dto.review.SellerReviewRequest;
import com.example.farmkart.service.ReviewService;
import com.example.farmkart.util.ApiResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/reviews")
@RequiredArgsConstructor
public class ReviewController {
	private final ReviewService reviewService;

	@PostMapping("/product")
	public ResponseEntity<ApiResponse<ReviewResponse>> product(@Validated @RequestBody ProductReviewRequest request) {
		return ResponseEntity.ok(ApiResponse.ok("Review added", reviewService.createProductReview(request)));
	}

	@PostMapping("/seller")
	public ResponseEntity<ApiResponse<ReviewResponse>> seller(@Validated @RequestBody SellerReviewRequest request) {
		return ResponseEntity.ok(ApiResponse.ok("Review added", reviewService.createSellerReview(request)));
	}

	@PostMapping("/delivery")
	public ResponseEntity<ApiResponse<ReviewResponse>> delivery(@Validated @RequestBody DeliveryReviewRequest request) {
		return ResponseEntity.ok(ApiResponse.ok("Review added", reviewService.createDeliveryReview(request)));
	}

	@GetMapping("/product/{id}")
	public ResponseEntity<ApiResponse<List<ReviewResponse>>> productReviews(@PathVariable UUID id) {
		return ResponseEntity.ok(ApiResponse.ok("Reviews fetched", reviewService.listProductReviews(id)));
	}
}
