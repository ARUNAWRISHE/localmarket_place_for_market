package com.example.farmkart.repository;

import java.util.UUID;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.farmkart.entity.Product;

public interface ProductRepository extends JpaRepository<Product, UUID> {
	Page<Product> findByNameContainingIgnoreCase(String name, Pageable pageable);
	Page<Product> findByCategoryId(UUID categoryId, Pageable pageable);
}
