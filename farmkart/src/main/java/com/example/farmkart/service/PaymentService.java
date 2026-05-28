package com.example.farmkart.service;

import java.util.List;

import com.example.farmkart.dto.payment.PaymentCreateRequest;
import com.example.farmkart.dto.payment.PaymentResponse;
import com.example.farmkart.dto.payment.PaymentVerifyRequest;

public interface PaymentService {
	PaymentResponse create(PaymentCreateRequest request);
	PaymentResponse verify(PaymentVerifyRequest request);
	List<PaymentResponse> history();
}
