package com.example.farmkart.dto.cart;

import java.math.BigDecimal;
import java.util.UUID;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CartItemResponse {
	private UUID id;
	private UUID productId;
	private String productName;
	private int quantity;
	private BigDecimal price;
}
