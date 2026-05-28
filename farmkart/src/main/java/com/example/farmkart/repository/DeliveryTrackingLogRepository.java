package com.example.farmkart.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.farmkart.entity.DeliveryTrackingLog;

public interface DeliveryTrackingLogRepository extends JpaRepository<DeliveryTrackingLog, UUID> {
	List<DeliveryTrackingLog> findByDeliveryId(UUID deliveryId);
}
