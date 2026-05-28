package com.example.farmkart.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.farmkart.constants.PaymentStatus;
import com.example.farmkart.dto.payment.PaymentCreateRequest;
import com.example.farmkart.dto.payment.PaymentResponse;
import com.example.farmkart.dto.payment.PaymentVerifyRequest;
import com.example.farmkart.entity.Order;
import com.example.farmkart.entity.Payment;
import com.example.farmkart.entity.User;
import com.example.farmkart.exception.NotFoundException;
import com.example.farmkart.repository.OrderRepository;
import com.example.farmkart.repository.PaymentRepository;
import com.example.farmkart.repository.UserRepository;
import com.example.farmkart.security.SecurityUtils;
import com.example.farmkart.service.PaymentService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService {
	private final PaymentRepository paymentRepository;
	private final OrderRepository orderRepository;
	private final UserRepository userRepository;

	@Override
	public PaymentResponse create(PaymentCreateRequest request) {
		Order order = orderRepository.findById(request.getOrderId())
				.orElseThrow(() -> new NotFoundException("Order not found"));
		Payment payment = new Payment();
		payment.setOrder(order);
		payment.setStatus(PaymentStatus.PENDING);
		payment.setAmount(order.getTotalAmount());
		payment.setProvider(request.getProvider());
		paymentRepository.save(payment);
		return toResponse(payment);
	}

	@Override
	public PaymentResponse verify(PaymentVerifyRequest request) {
		Payment payment = paymentRepository.findById(request.getPaymentId())
				.orElseThrow(() -> new NotFoundException("Payment not found"));
		payment.setProviderReference(request.getProviderReference());
		payment.setStatus(PaymentStatus.PAID);
		paymentRepository.save(payment);
		return toResponse(payment);
	}

	@Override
	public List<PaymentResponse> history() {
		User user = getCurrentUser();
		return paymentRepository.findByOrderUserId(user.getId()).stream().map(this::toResponse).toList();
	}

	private User getCurrentUser() {
		String email = SecurityUtils.getCurrentUserEmail().orElseThrow(() ->
				new NotFoundException("User not found"));
		return userRepository.findByEmail(email)
				.orElseThrow(() -> new NotFoundException("User not found"));
	}

	private PaymentResponse toResponse(Payment payment) {
		return PaymentResponse.builder()
				.id(payment.getId())
				.orderId(payment.getOrder().getId())
				.status(payment.getStatus())
				.amount(payment.getAmount())
				.provider(payment.getProvider())
				.build();
	}
}
