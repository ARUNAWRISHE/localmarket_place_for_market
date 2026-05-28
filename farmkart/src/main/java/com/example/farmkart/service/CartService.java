package com.example.farmkart.service;

import java.util.UUID;

import com.example.farmkart.dto.cart.AddToCartRequest;
import com.example.farmkart.dto.cart.CartResponse;
import com.example.farmkart.dto.cart.UpdateCartItemRequest;

public interface CartService {
	CartResponse add(AddToCartRequest request);
	CartResponse update(UpdateCartItemRequest request);
	void remove(UUID itemId);
	CartResponse get();
}
