package com.example.farmkart.repository;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.farmkart.entity.Cart;

public interface CartRepository extends JpaRepository<Cart, UUID> {
	Optional<Cart> findByUserId(UUID userId);
}
