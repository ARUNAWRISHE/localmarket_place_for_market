package com.example.farmkart.dto.order;

import java.math.BigDecimal;
import java.util.UUID;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class OrderItemResponse {
	private UUID productId;
	private String productName;
	private int quantity;
	private BigDecimal price;
}
