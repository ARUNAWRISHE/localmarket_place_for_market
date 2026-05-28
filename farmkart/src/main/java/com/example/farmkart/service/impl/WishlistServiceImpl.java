package com.example.farmkart.service.impl;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.example.farmkart.dto.wishlist.WishlistRequest;
import com.example.farmkart.dto.wishlist.WishlistResponse;
import com.example.farmkart.entity.Product;
import com.example.farmkart.entity.User;
import com.example.farmkart.entity.Wishlist;
import com.example.farmkart.exception.NotFoundException;
import com.example.farmkart.repository.ProductRepository;
import com.example.farmkart.repository.UserRepository;
import com.example.farmkart.repository.WishlistRepository;
import com.example.farmkart.security.SecurityUtils;
import com.example.farmkart.service.WishlistService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class WishlistServiceImpl implements WishlistService {
	private final WishlistRepository wishlistRepository;
	private final ProductRepository productRepository;
	private final UserRepository userRepository;

	@Override
	public WishlistResponse add(WishlistRequest request) {
		User user = getCurrentUser();
		Product product = productRepository.findById(request.getProductId())
				.orElseThrow(() -> new NotFoundException("Product not found"));
		Wishlist wishlist = new Wishlist();
		wishlist.setUser(user);
		wishlist.setProduct(product);
		wishlistRepository.save(wishlist);
		return toResponse(wishlist);
	}

	@Override
	public void remove(UUID id) {
		Wishlist wishlist = wishlistRepository.findById(id)
				.orElseThrow(() -> new NotFoundException("Wishlist item not found"));
		wishlistRepository.delete(wishlist);
	}

	@Override
	public List<WishlistResponse> list() {
		User user = getCurrentUser();
		return wishlistRepository.findByUserId(user.getId()).stream().map(this::toResponse).toList();
	}

	private User getCurrentUser() {
		String email = SecurityUtils.getCurrentUserEmail().orElseThrow(() ->
				new NotFoundException("User not found"));
		return userRepository.findByEmail(email)
				.orElseThrow(() -> new NotFoundException("User not found"));
	}

	private WishlistResponse toResponse(Wishlist wishlist) {
		return WishlistResponse.builder()
				.id(wishlist.getId())
				.productId(wishlist.getProduct().getId())
				.build();
	}
}
