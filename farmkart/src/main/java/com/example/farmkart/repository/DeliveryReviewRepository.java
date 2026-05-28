package com.example.farmkart.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.farmkart.entity.DeliveryReview;

public interface DeliveryReviewRepository extends JpaRepository<DeliveryReview, UUID> {
	List<DeliveryReview> findByDeliveryId(UUID deliveryId);
}
