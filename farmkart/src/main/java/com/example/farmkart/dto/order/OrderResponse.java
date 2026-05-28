package com.example.farmkart.dto.order;

import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

import com.example.farmkart.constants.OrderStatus;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class OrderResponse {
	private UUID id;
	private OrderStatus status;
	private BigDecimal totalAmount;
	private List<OrderItemResponse> items;
}
