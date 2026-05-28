package com.example.farmkart.repository;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.farmkart.entity.Coupon;

public interface CouponRepository extends JpaRepository<Coupon, UUID> {
	Optional<Coupon> findByCodeIgnoreCase(String code);
}
