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

import com.example.farmkart.dto.order.CreateOrderRequest;
import com.example.farmkart.dto.order.OrderResponse;
import com.example.farmkart.dto.order.UpdateOrderStatusRequest;
import com.example.farmkart.service.OrderService;
import com.example.farmkart.util.ApiResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/orders")
@RequiredArgsConstructor
public class OrderController {
	private final OrderService orderService;

	@PostMapping
	public ResponseEntity<ApiResponse<OrderResponse>> place(@Validated @RequestBody CreateOrderRequest request) {
		return ResponseEntity.ok(ApiResponse.ok("Order placed", orderService.place(request)));
	}

	@GetMapping
	public ResponseEntity<ApiResponse<List<OrderResponse>>> list() {
		return ResponseEntity.ok(ApiResponse.ok("Orders fetched", orderService.list()));
	}

	@GetMapping("/{id}")
	public ResponseEntity<ApiResponse<OrderResponse>> getById(@PathVariable UUID id) {
		return ResponseEntity.ok(ApiResponse.ok("Order fetched", orderService.getById(id)));
	}

	@PutMapping("/status/{id}")
	public ResponseEntity<ApiResponse<OrderResponse>> updateStatus(@PathVariable UUID id,
			@Validated @RequestBody UpdateOrderStatusRequest request) {
		return ResponseEntity.ok(ApiResponse.ok("Order status updated", orderService.updateStatus(id, request)));
	}

	@PutMapping("/cancel/{id}")
	public ResponseEntity<ApiResponse<OrderResponse>> cancel(@PathVariable UUID id) {
		return ResponseEntity.ok(ApiResponse.ok("Order cancelled", orderService.cancel(id)));
	}
}
