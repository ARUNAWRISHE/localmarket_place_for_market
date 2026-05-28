package com.example.farmkart.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.farmkart.dto.user.AddressRequest;
import com.example.farmkart.dto.user.AddressResponse;
import com.example.farmkart.dto.user.UpdateProfileRequest;
import com.example.farmkart.dto.user.UserProfileResponse;
import com.example.farmkart.entity.Address;
import com.example.farmkart.entity.User;
import com.example.farmkart.exception.NotFoundException;
import com.example.farmkart.repository.AddressRepository;
import com.example.farmkart.repository.UserRepository;
import com.example.farmkart.security.SecurityUtils;
import com.example.farmkart.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
	private final UserRepository userRepository;
	private final AddressRepository addressRepository;

	@Override
	public UserProfileResponse getProfile() {
		User user = getCurrentUser();
		return toProfile(user);
	}

	@Override
	public UserProfileResponse updateProfile(UpdateProfileRequest request) {
		User user = getCurrentUser();
		user.setFullName(request.getFullName());
		user.setPhone(request.getPhone());
		user.setProfileImageUrl(request.getProfileImageUrl());
		userRepository.save(user);
		return toProfile(user);
	}

	@Override
	public AddressResponse addAddress(AddressRequest request) {
		User user = getCurrentUser();
		Address address = new Address();
		address.setUser(user);
		address.setLine1(request.getLine1());
		address.setLine2(request.getLine2());
		address.setCity(request.getCity());
		address.setState(request.getState());
		address.setCountry(request.getCountry());
		address.setPostalCode(request.getPostalCode());
		address.setLabel(request.getLabel());
		address.setDefault(request.isDefault());
		addressRepository.save(address);
		return toAddress(address);
	}

	@Override
	public List<AddressResponse> getAddresses() {
		User user = getCurrentUser();
		return addressRepository.findByUserId(user.getId()).stream().map(this::toAddress).toList();
	}

	private User getCurrentUser() {
		String email = SecurityUtils.getCurrentUserEmail().orElseThrow(() ->
				new NotFoundException("User not found"));
		return userRepository.findByEmail(email)
				.orElseThrow(() -> new NotFoundException("User not found"));
	}

	private UserProfileResponse toProfile(User user) {
		return UserProfileResponse.builder()
				.id(user.getId())
				.fullName(user.getFullName())
				.email(user.getEmail())
				.phone(user.getPhone())
				.profileImageUrl(user.getProfileImageUrl())
				.roles(user.getRoles())
				.build();
	}

	private AddressResponse toAddress(Address address) {
		return AddressResponse.builder()
				.id(address.getId())
				.line1(address.getLine1())
				.line2(address.getLine2())
				.city(address.getCity())
				.state(address.getState())
				.country(address.getCountry())
				.postalCode(address.getPostalCode())
				.label(address.getLabel())
				.isDefault(address.isDefault())
				.build();
	}
}
