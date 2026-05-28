package com.example.farmkart.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.farmkart.entity.Delivery;

public interface DeliveryRepository extends JpaRepository<Delivery, UUID> {
	List<Delivery> findByDeliveryPartnerId(UUID deliveryPartnerId);
}
