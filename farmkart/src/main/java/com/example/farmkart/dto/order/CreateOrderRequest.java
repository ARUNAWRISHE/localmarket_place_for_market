package com.example.farmkart.dto.order;

import java.util.UUID;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class CreateOrderRequest {
	@NotNull
	private UUID addressId;
}
