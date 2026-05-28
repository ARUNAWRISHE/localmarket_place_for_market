package com.example.farmkart.dto.user;

import java.util.Set;
import java.util.UUID;

import com.example.farmkart.constants.Role;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserProfileResponse {
	private UUID id;
	private String fullName;
	private String email;
	private String phone;
	private String profileImageUrl;
	private Set<Role> roles;
}
