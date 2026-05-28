package com.example.farmkart.repository;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.farmkart.entity.DeliveryProfile;

public interface DeliveryProfileRepository extends JpaRepository<DeliveryProfile, UUID> {
	Optional<DeliveryProfile> findByUserId(UUID userId);
}
