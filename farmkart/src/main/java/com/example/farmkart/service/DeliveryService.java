package com.example.farmkart.service;

import java.util.List;
import java.util.UUID;

import com.example.farmkart.dto.delivery.DeliveryEarningsResponse;
import com.example.farmkart.dto.delivery.DeliveryLocationRequest;
import com.example.farmkart.dto.delivery.DeliveryResponse;
import com.example.farmkart.dto.delivery.DeliveryStatusUpdateRequest;

public interface DeliveryService {
	List<DeliveryResponse> active();
	DeliveryResponse updateStatus(UUID deliveryId, DeliveryStatusUpdateRequest request);
	void logLocation(DeliveryLocationRequest request);
	List<DeliveryResponse> history();
	DeliveryEarningsResponse earnings();
}
