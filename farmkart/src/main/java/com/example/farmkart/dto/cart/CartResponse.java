package com.example.farmkart.dto.cart;

import java.math.BigDecimal;
import java.util.List;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CartResponse {
	private List<CartItemResponse> items;
	private BigDecimal totalAmount;
}
