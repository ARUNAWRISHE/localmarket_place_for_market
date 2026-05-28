package com.example.farmkart.service.impl;

import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.example.farmkart.constants.OrderStatus;
import com.example.farmkart.dto.order.CreateOrderRequest;
import com.example.farmkart.dto.order.OrderItemResponse;
import com.example.farmkart.dto.order.OrderResponse;
import com.example.farmkart.dto.order.UpdateOrderStatusRequest;
import com.example.farmkart.entity.Address;
import com.example.farmkart.entity.Cart;
import com.example.farmkart.entity.CartItem;
import com.example.farmkart.entity.Order;
import com.example.farmkart.entity.OrderItem;
import com.example.farmkart.entity.User;
import com.example.farmkart.exception.NotFoundException;
import com.example.farmkart.repository.AddressRepository;
import com.example.farmkart.repository.CartItemRepository;
import com.example.farmkart.repository.CartRepository;
import com.example.farmkart.repository.OrderItemRepository;
import com.example.farmkart.repository.OrderRepository;
import com.example.farmkart.repository.UserRepository;
import com.example.farmkart.security.SecurityUtils;
import com.example.farmkart.service.OrderService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {
	private final OrderRepository orderRepository;
	private final OrderItemRepository orderItemRepository;
	private final CartRepository cartRepository;
	private final CartItemRepository cartItemRepository;
	private final AddressRepository addressRepository;
	private final UserRepository userRepository;

	@Override
	public OrderResponse place(CreateOrderRequest request) {
		User user = getCurrentUser();
		Cart cart = cartRepository.findByUserId(user.getId())
				.orElseThrow(() -> new NotFoundException("Cart not found"));
		Address address = addressRepository.findById(request.getAddressId())
				.orElseThrow(() -> new NotFoundException("Address not found"));

		BigDecimal total = cart.getItems().stream()
				.map(item -> item.getPriceAtAdd().multiply(BigDecimal.valueOf(item.getQuantity())))
				.reduce(BigDecimal.ZERO, BigDecimal::add);

		Order order = new Order();
		order.setUser(user);
		order.setDeliveryAddress(address);
		order.setStatus(OrderStatus.PENDING);
		order.setTotalAmount(total);
		orderRepository.save(order);

		for (CartItem cartItem : cart.getItems()) {
			OrderItem orderItem = new OrderItem();
			orderItem.setOrder(order);
			orderItem.setProduct(cartItem.getProduct());
			orderItem.setSeller(cartItem.getProduct().getSeller());
			orderItem.setQuantity(cartItem.getQuantity());
			orderItem.setPrice(cartItem.getPriceAtAdd());
			orderItemRepository.save(orderItem);
		}

		cartItemRepository.deleteAll(cart.getItems());
		return toResponse(order);
	}

	@Override
	public List<OrderResponse> list() {
		User user = getCurrentUser();
		return orderRepository.findByUserId(user.getId()).stream().map(this::toResponse).toList();
	}

	@Override
	public OrderResponse getById(UUID id) {
		Order order = orderRepository.findById(id)
				.orElseThrow(() -> new NotFoundException("Order not found"));
		return toResponse(order);
	}

	@Override
	public OrderResponse updateStatus(UUID id, UpdateOrderStatusRequest request) {
		Order order = orderRepository.findById(id)
				.orElseThrow(() -> new NotFoundException("Order not found"));
		order.setStatus(request.getStatus());
		orderRepository.save(order);
		return toResponse(order);
	}

	@Override
	public OrderResponse cancel(UUID id) {
		Order order = orderRepository.findById(id)
				.orElseThrow(() -> new NotFoundException("Order not found"));
		order.setStatus(OrderStatus.CANCELLED);
		orderRepository.save(order);
		return toResponse(order);
	}

	private User getCurrentUser() {
		String email = SecurityUtils.getCurrentUserEmail().orElseThrow(() ->
				new NotFoundException("User not found"));
		return userRepository.findByEmail(email)
				.orElseThrow(() -> new NotFoundException("User not found"));
	}

	private OrderResponse toResponse(Order order) {
		List<OrderItemResponse> items = order.getItems().stream()
				.map(item -> OrderItemResponse.builder()
						.productId(item.getProduct().getId())
						.productName(item.getProduct().getName())
						.quantity(item.getQuantity())
						.price(item.getPrice())
						.build())
				.toList();
		return OrderResponse.builder()
				.id(order.getId())
				.status(order.getStatus())
				.totalAmount(order.getTotalAmount())
				.items(items)
				.build();
	}
}
