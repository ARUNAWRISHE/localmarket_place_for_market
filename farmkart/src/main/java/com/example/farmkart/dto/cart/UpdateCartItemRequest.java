package com.example.farmkart.dto.cart;

import java.util.UUID;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class UpdateCartItemRequest {
	@NotNull
	private UUID itemId;

	@Min(1)
	private int quantity;
}
