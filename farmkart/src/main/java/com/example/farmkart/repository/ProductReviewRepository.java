package com.example.farmkart.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.farmkart.entity.ProductReview;

public interface ProductReviewRepository extends JpaRepository<ProductReview, UUID> {
	List<ProductReview> findByProductId(UUID productId);
}
