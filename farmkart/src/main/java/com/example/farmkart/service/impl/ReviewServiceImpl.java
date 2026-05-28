package com.example.farmkart.service.impl;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.example.farmkart.dto.review.DeliveryReviewRequest;
import com.example.farmkart.dto.review.ProductReviewRequest;
import com.example.farmkart.dto.review.ReviewResponse;
import com.example.farmkart.dto.review.SellerReviewRequest;
import com.example.farmkart.entity.Delivery;
import com.example.farmkart.entity.DeliveryReview;
import com.example.farmkart.entity.Product;
import com.example.farmkart.entity.ProductReview;
import com.example.farmkart.entity.SellerProfile;
import com.example.farmkart.entity.SellerReview;
import com.example.farmkart.entity.User;
import com.example.farmkart.exception.NotFoundException;
import com.example.farmkart.repository.DeliveryRepository;
import com.example.farmkart.repository.DeliveryReviewRepository;
import com.example.farmkart.repository.ProductRepository;
import com.example.farmkart.repository.ProductReviewRepository;
import com.example.farmkart.repository.SellerProfileRepository;
import com.example.farmkart.repository.SellerReviewRepository;
import com.example.farmkart.repository.UserRepository;
import com.example.farmkart.security.SecurityUtils;
import com.example.farmkart.service.ReviewService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService {
	private final ProductRepository productRepository;
	private final ProductReviewRepository productReviewRepository;
	private final SellerProfileRepository sellerProfileRepository;
	private final SellerReviewRepository sellerReviewRepository;
	private final DeliveryRepository deliveryRepository;
	private final DeliveryReviewRepository deliveryReviewRepository;
	private final UserRepository userRepository;

	@Override
	public ReviewResponse createProductReview(ProductReviewRequest request) {
		User user = getCurrentUser();
		Product product = productRepository.findById(request.getProductId())
				.orElseThrow(() -> new NotFoundException("Product not found"));
		ProductReview review = new ProductReview();
		review.setProduct(product);
		review.setReviewer(user);
		review.setRating(request.getRating());
		review.setComment(request.getComment());
		productReviewRepository.save(review);
		return toResponse(review.getId(), review.getRating(), review.getComment());
	}

	@Override
	public ReviewResponse createSellerReview(SellerReviewRequest request) {
		User user = getCurrentUser();
		SellerProfile seller = sellerProfileRepository.findById(request.getSellerId())
				.orElseThrow(() -> new NotFoundException("Seller not found"));
		SellerReview review = new SellerReview();
		review.setSeller(seller);
		review.setReviewer(user);
		review.setRating(request.getRating());
		review.setComment(request.getComment());
		sellerReviewRepository.save(review);
		return toResponse(review.getId(), review.getRating(), review.getComment());
	}

	@Override
	public ReviewResponse createDeliveryReview(DeliveryReviewRequest request) {
		User user = getCurrentUser();
		Delivery delivery = deliveryRepository.findById(request.getDeliveryId())
				.orElseThrow(() -> new NotFoundException("Delivery not found"));
		DeliveryReview review = new DeliveryReview();
		review.setDelivery(delivery);
		review.setReviewer(user);
		review.setRating(request.getRating());
		review.setComment(request.getComment());
		deliveryReviewRepository.save(review);
		return toResponse(review.getId(), review.getRating(), review.getComment());
	}

	@Override
	public List<ReviewResponse> listProductReviews(UUID productId) {
		return productReviewRepository.findByProductId(productId).stream()
				.map(review -> toResponse(review.getId(), review.getRating(), review.getComment()))
				.toList();
	}

	private User getCurrentUser() {
		String email = SecurityUtils.getCurrentUserEmail().orElseThrow(() ->
				new NotFoundException("User not found"));
		return userRepository.findByEmail(email)
				.orElseThrow(() -> new NotFoundException("User not found"));
	}

	private ReviewResponse toResponse(UUID id, int rating, String comment) {
		return ReviewResponse.builder()
				.id(id)
				.rating(rating)
				.comment(comment)
				.build();
	}
}
