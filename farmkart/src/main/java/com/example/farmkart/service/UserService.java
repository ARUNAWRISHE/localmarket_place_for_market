package com.example.farmkart.service;

import java.util.List;

import com.example.farmkart.dto.user.AddressRequest;
import com.example.farmkart.dto.user.AddressResponse;
import com.example.farmkart.dto.user.UpdateProfileRequest;
import com.example.farmkart.dto.user.UserProfileResponse;

public interface UserService {
	UserProfileResponse getProfile();
	UserProfileResponse updateProfile(UpdateProfileRequest request);
	AddressResponse addAddress(AddressRequest request);
	List<AddressResponse> getAddresses();
}
