package com.example.farmkart.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.farmkart.entity.Order;

public interface OrderRepository extends JpaRepository<Order, UUID> {
	List<Order> findByUserId(UUID userId);
}
