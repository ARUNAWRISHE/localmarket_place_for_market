package com.example.farmkart.repository;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.farmkart.entity.SellerProfile;

public interface SellerProfileRepository extends JpaRepository<SellerProfile, UUID> {
	Optional<SellerProfile> findByUserId(UUID userId);
}
