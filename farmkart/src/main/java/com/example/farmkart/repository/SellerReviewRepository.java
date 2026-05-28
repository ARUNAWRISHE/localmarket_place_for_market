package com.example.farmkart.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.farmkart.entity.SellerReview;

public interface SellerReviewRepository extends JpaRepository<SellerReview, UUID> {
	List<SellerReview> findBySellerId(UUID sellerId);
}
