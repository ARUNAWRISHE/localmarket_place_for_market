package com.example.farmkart.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.farmkart.dto.payment.PaymentCreateRequest;
import com.example.farmkart.dto.payment.PaymentResponse;
import com.example.farmkart.dto.payment.PaymentVerifyRequest;
import com.example.farmkart.service.PaymentService;
import com.example.farmkart.util.ApiResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/payments")
@RequiredArgsConstructor
public class PaymentController {
	private final PaymentService paymentService;

	@PostMapping("/create")
	public ResponseEntity<ApiResponse<PaymentResponse>> create(@Validated @RequestBody PaymentCreateRequest request) {
		return ResponseEntity.ok(ApiResponse.ok("Payment initialized", paymentService.create(request)));
	}

	@PostMapping("/verify")
	public ResponseEntity<ApiResponse<PaymentResponse>> verify(@Validated @RequestBody PaymentVerifyRequest request) {
		return ResponseEntity.ok(ApiResponse.ok("Payment verified", paymentService.verify(request)));
	}

	@GetMapping("/history")
	public ResponseEntity<ApiResponse<List<PaymentResponse>>> history() {
		return ResponseEntity.ok(ApiResponse.ok("Payment history", paymentService.history()));
	}
}
