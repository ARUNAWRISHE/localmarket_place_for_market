package com.example.farmkart.service;

import java.util.List;
import java.util.UUID;

import com.example.farmkart.dto.review.DeliveryReviewRequest;
import com.example.farmkart.dto.review.ProductReviewRequest;
import com.example.farmkart.dto.review.ReviewResponse;
import com.example.farmkart.dto.review.SellerReviewRequest;

public interface ReviewService {
	ReviewResponse createProductReview(ProductReviewRequest request);
	ReviewResponse createSellerReview(SellerReviewRequest request);
	ReviewResponse createDeliveryReview(DeliveryReviewRequest request);
	List<ReviewResponse> listProductReviews(UUID productId);
}
