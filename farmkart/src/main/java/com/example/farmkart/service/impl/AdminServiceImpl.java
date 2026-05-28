package com.example.farmkart.service.impl;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.example.farmkart.constants.Role;
import com.example.farmkart.dto.admin.AdminUserResponse;
import com.example.farmkart.entity.Product;
import com.example.farmkart.entity.SellerProfile;
import com.example.farmkart.entity.User;
import com.example.farmkart.exception.NotFoundException;
import com.example.farmkart.repository.ProductRepository;
import com.example.farmkart.repository.SellerProfileRepository;
import com.example.farmkart.repository.UserRepository;
import com.example.farmkart.service.AdminService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService {
	private final UserRepository userRepository;
	private final SellerProfileRepository sellerProfileRepository;
	private final ProductRepository productRepository;

	@Override
	public List<AdminUserResponse> users() {
		return userRepository.findAll().stream().map(this::toResponse).toList();
	}

	@Override
	public List<AdminUserResponse> sellers() {
		return userRepository.findAll().stream()
				.filter(user -> user.getRoles().contains(Role.SELLER))
				.map(this::toResponse)
				.toList();
	}

	@Override
	public void verifySeller(UUID sellerId) {
		SellerProfile seller = sellerProfileRepository.findById(sellerId)
				.orElseThrow(() -> new NotFoundException("Seller not found"));
		seller.setVerified(true);
		sellerProfileRepository.save(seller);
	}

	@Override
	public void deleteProduct(UUID productId) {
		Product product = productRepository.findById(productId)
				.orElseThrow(() -> new NotFoundException("Product not found"));
		productRepository.delete(product);
	}

	private AdminUserResponse toResponse(User user) {
		return AdminUserResponse.builder()
				.id(user.getId())
				.fullName(user.getFullName())
				.email(user.getEmail())
				.active(user.isActive())
				.roles(user.getRoles())
				.build();
	}
}
