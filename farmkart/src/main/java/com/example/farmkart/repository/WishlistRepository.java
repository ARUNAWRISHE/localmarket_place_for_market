package com.example.farmkart.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.farmkart.entity.Wishlist;

public interface WishlistRepository extends JpaRepository<Wishlist, UUID> {
	List<Wishlist> findByUserId(UUID userId);
}
