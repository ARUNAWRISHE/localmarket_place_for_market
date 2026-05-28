package com.example.farmkart.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.farmkart.entity.Payment;

public interface PaymentRepository extends JpaRepository<Payment, UUID> {
	List<Payment> findByOrderUserId(UUID userId);
}
