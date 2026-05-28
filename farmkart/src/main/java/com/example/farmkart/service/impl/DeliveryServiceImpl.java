package com.example.farmkart.service.impl;

import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.example.farmkart.constants.DeliveryStatus;
import com.example.farmkart.dto.delivery.DeliveryEarningsResponse;
import com.example.farmkart.dto.delivery.DeliveryLocationRequest;
import com.example.farmkart.dto.delivery.DeliveryResponse;
import com.example.farmkart.dto.delivery.DeliveryStatusUpdateRequest;
import com.example.farmkart.entity.Delivery;
import com.example.farmkart.entity.DeliveryTrackingLog;
import com.example.farmkart.entity.User;
import com.example.farmkart.exception.NotFoundException;
import com.example.farmkart.repository.DeliveryRepository;
import com.example.farmkart.repository.DeliveryTrackingLogRepository;
import com.example.farmkart.repository.UserRepository;
import com.example.farmkart.security.SecurityUtils;
import com.example.farmkart.service.DeliveryService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class DeliveryServiceImpl implements DeliveryService {
	private final DeliveryRepository deliveryRepository;
	private final DeliveryTrackingLogRepository trackingLogRepository;
	private final UserRepository userRepository;

	@Override
	public List<DeliveryResponse> active() {
		User user = getCurrentUser();
		return deliveryRepository.findByDeliveryPartnerId(user.getId()).stream()
				.filter(delivery -> delivery.getStatus() != DeliveryStatus.DELIVERED)
				.map(this::toResponse)
				.toList();
	}

	@Override
	public DeliveryResponse updateStatus(UUID deliveryId, DeliveryStatusUpdateRequest request) {
		Delivery delivery = deliveryRepository.findById(deliveryId)
				.orElseThrow(() -> new NotFoundException("Delivery not found"));
		delivery.setStatus(request.getStatus());
		deliveryRepository.save(delivery);
		return toResponse(delivery);
	}

	@Override
	public void logLocation(DeliveryLocationRequest request) {
		Delivery delivery = deliveryRepository.findById(request.getDeliveryId())
				.orElseThrow(() -> new NotFoundException("Delivery not found"));
		DeliveryTrackingLog log = new DeliveryTrackingLog();
		log.setDelivery(delivery);
		log.setLatitude(request.getLatitude());
		log.setLongitude(request.getLongitude());
		trackingLogRepository.save(log);
	}

	@Override
	public List<DeliveryResponse> history() {
		User user = getCurrentUser();
		return deliveryRepository.findByDeliveryPartnerId(user.getId()).stream()
				.map(this::toResponse)
				.toList();
	}

	@Override
	public DeliveryEarningsResponse earnings() {
		User user = getCurrentUser();
		List<Delivery> deliveries = deliveryRepository.findByDeliveryPartnerId(user.getId());
		BigDecimal total = deliveries.stream()
				.filter(delivery -> delivery.getOrder() != null)
				.map(delivery -> delivery.getOrder().getTotalAmount().multiply(BigDecimal.valueOf(0.1)))
				.reduce(BigDecimal.ZERO, BigDecimal::add);
		return DeliveryEarningsResponse.builder()
				.totalEarnings(total)
				.totalDeliveries(deliveries.size())
				.build();
	}

	private User getCurrentUser() {
		String email = SecurityUtils.getCurrentUserEmail().orElseThrow(() ->
				new NotFoundException("User not found"));
		return userRepository.findByEmail(email)
				.orElseThrow(() -> new NotFoundException("User not found"));
	}

	private DeliveryResponse toResponse(Delivery delivery) {
		return DeliveryResponse.builder()
				.id(delivery.getId())
				.orderId(delivery.getOrder() != null ? delivery.getOrder().getId() : null)
				.status(delivery.getStatus())
				.build();
	}
}
