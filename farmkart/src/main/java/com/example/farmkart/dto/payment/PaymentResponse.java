package com.example.farmkart.dto.payment;

import java.math.BigDecimal;
import java.util.UUID;

import com.example.farmkart.constants.PaymentStatus;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PaymentResponse {
	private UUID id;
	private UUID orderId;
	private PaymentStatus status;
	private BigDecimal amount;
	private String provider;
}
