package com.example.farmkart.service.impl;

import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.example.farmkart.dto.cart.AddToCartRequest;
import com.example.farmkart.dto.cart.CartItemResponse;
import com.example.farmkart.dto.cart.CartResponse;
import com.example.farmkart.dto.cart.UpdateCartItemRequest;
import com.example.farmkart.entity.Cart;
import com.example.farmkart.entity.CartItem;
import com.example.farmkart.entity.Product;
import com.example.farmkart.entity.User;
import com.example.farmkart.exception.NotFoundException;
import com.example.farmkart.repository.CartItemRepository;
import com.example.farmkart.repository.CartRepository;
import com.example.farmkart.repository.ProductRepository;
import com.example.farmkart.repository.UserRepository;
import com.example.farmkart.security.SecurityUtils;
import com.example.farmkart.service.CartService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService {
	private final CartRepository cartRepository;
	private final CartItemRepository cartItemRepository;
	private final ProductRepository productRepository;
	private final UserRepository userRepository;

	@Override
	public CartResponse add(AddToCartRequest request) {
		Cart cart = getOrCreateCart();
		Product product = productRepository.findById(request.getProductId())
				.orElseThrow(() -> new NotFoundException("Product not found"));
		CartItem item = new CartItem();
		item.setCart(cart);
		item.setProduct(product);
		item.setQuantity(request.getQuantity());
		item.setPriceAtAdd(product.getPrice());
		cartItemRepository.save(item);
		return buildResponse(cart);
	}

	@Override
	public CartResponse update(UpdateCartItemRequest request) {
		CartItem item = cartItemRepository.findById(request.getItemId())
				.orElseThrow(() -> new NotFoundException("Cart item not found"));
		item.setQuantity(request.getQuantity());
		cartItemRepository.save(item);
		return buildResponse(item.getCart());
	}

	@Override
	public void remove(UUID itemId) {
		CartItem item = cartItemRepository.findById(itemId)
				.orElseThrow(() -> new NotFoundException("Cart item not found"));
		cartItemRepository.delete(item);
	}

	@Override
	public CartResponse get() {
		Cart cart = getOrCreateCart();
		return buildResponse(cart);
	}

	private Cart getOrCreateCart() {
		User user = getCurrentUser();
		return cartRepository.findByUserId(user.getId()).orElseGet(() -> {
			Cart cart = new Cart();
			cart.setUser(user);
			return cartRepository.save(cart);
		});
	}

	private User getCurrentUser() {
		String email = SecurityUtils.getCurrentUserEmail().orElseThrow(() ->
				new NotFoundException("User not found"));
		return userRepository.findByEmail(email)
				.orElseThrow(() -> new NotFoundException("User not found"));
	}

	private CartResponse buildResponse(Cart cart) {
		List<CartItemResponse> items = cart.getItems().stream().map(item ->
				CartItemResponse.builder()
						.id(item.getId())
						.productId(item.getProduct().getId())
						.productName(item.getProduct().getName())
						.quantity(item.getQuantity())
						.price(item.getPriceAtAdd())
						.build()).toList();

		BigDecimal total = items.stream()
				.map(i -> i.getPrice().multiply(BigDecimal.valueOf(i.getQuantity())))
				.reduce(BigDecimal.ZERO, BigDecimal::add);

		return CartResponse.builder()
				.items(items)
				.totalAmount(total)
				.build();
	}
}
