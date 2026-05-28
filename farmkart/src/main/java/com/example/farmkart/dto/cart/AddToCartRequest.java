package com.example.farmkart.dto.cart;

import java.util.UUID;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class AddToCartRequest {
	@NotNull
	private UUID productId;

	@Min(1)
	private int quantity;
}
