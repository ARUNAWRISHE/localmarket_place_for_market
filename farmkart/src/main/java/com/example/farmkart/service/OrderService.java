package com.example.farmkart.service;

import java.util.List;
import java.util.UUID;

import com.example.farmkart.dto.order.CreateOrderRequest;
import com.example.farmkart.dto.order.OrderResponse;
import com.example.farmkart.dto.order.UpdateOrderStatusRequest;

public interface OrderService {
	OrderResponse place(CreateOrderRequest request);
	List<OrderResponse> list();
	OrderResponse getById(UUID id);
	OrderResponse updateStatus(UUID id, UpdateOrderStatusRequest request);
	OrderResponse cancel(UUID id);
}
