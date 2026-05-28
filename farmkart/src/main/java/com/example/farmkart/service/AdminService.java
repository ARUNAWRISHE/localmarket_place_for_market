package com.example.farmkart.service;

import java.util.List;
import java.util.UUID;

import com.example.farmkart.dto.admin.AdminUserResponse;

public interface AdminService {
	List<AdminUserResponse> users();
	List<AdminUserResponse> sellers();
	void verifySeller(UUID sellerId);
	void deleteProduct(UUID productId);
}
