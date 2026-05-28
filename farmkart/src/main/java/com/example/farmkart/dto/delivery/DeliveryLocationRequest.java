package com.example.farmkart.dto.delivery;

import java.math.BigDecimal;
import java.util.UUID;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class DeliveryLocationRequest {
	@NotNull
	private UUID deliveryId;
	@NotNull
	private BigDecimal latitude;
	@NotNull
	private BigDecimal longitude;
}
