package com.example.farmkart.dto.order;

import com.example.farmkart.constants.OrderStatus;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class UpdateOrderStatusRequest {
	@NotNull
	private OrderStatus status;
}
