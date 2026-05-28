package com.example.farmkart.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.farmkart.dto.delivery.DeliveryEarningsResponse;
import com.example.farmkart.dto.delivery.DeliveryLocationRequest;
import com.example.farmkart.dto.delivery.DeliveryResponse;
import com.example.farmkart.dto.delivery.DeliveryStatusUpdateRequest;
import com.example.farmkart.service.DeliveryService;
import com.example.farmkart.util.ApiResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/delivery")
@RequiredArgsConstructor
public class DeliveryController {
	private final DeliveryService deliveryService;

	@GetMapping("/active")
	public ResponseEntity<ApiResponse<List<DeliveryResponse>>> active() {
		return ResponseEntity.ok(ApiResponse.ok("Active deliveries", deliveryService.active()));
	}

	@PutMapping("/status/{id}")
	public ResponseEntity<ApiResponse<DeliveryResponse>> updateStatus(@PathVariable UUID id,
			@Validated @RequestBody DeliveryStatusUpdateRequest request) {
		return ResponseEntity.ok(ApiResponse.ok("Delivery updated", deliveryService.updateStatus(id, request)));
	}

	@PostMapping("/location")
	public ResponseEntity<ApiResponse<Object>> logLocation(@Validated @RequestBody DeliveryLocationRequest request) {
		deliveryService.logLocation(request);
		return ResponseEntity.ok(ApiResponse.ok("Location logged", null));
	}

	@GetMapping("/history")
	public ResponseEntity<ApiResponse<List<DeliveryResponse>>> history() {
		return ResponseEntity.ok(ApiResponse.ok("Delivery history", deliveryService.history()));
	}

	@GetMapping("/earnings")
	public ResponseEntity<ApiResponse<DeliveryEarningsResponse>> earnings() {
		return ResponseEntity.ok(ApiResponse.ok("Delivery earnings", deliveryService.earnings()));
	}
}
