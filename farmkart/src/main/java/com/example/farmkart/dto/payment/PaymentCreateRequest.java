package com.example.farmkart.dto.payment;

import java.util.UUID;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class PaymentCreateRequest {
	@NotNull
	private UUID orderId;

	@NotBlank
	private String provider;
}
