package com.example.farmkart.dto.payment;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.UUID;

@Data
public class PaymentVerifyRequest {
	@NotNull
	private UUID paymentId;

	@NotBlank
	private String providerReference;
}
