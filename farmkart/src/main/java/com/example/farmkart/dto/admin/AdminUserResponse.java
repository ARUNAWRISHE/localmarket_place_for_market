package com.example.farmkart.dto.admin;

import java.util.Set;
import java.util.UUID;

import com.example.farmkart.constants.Role;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AdminUserResponse {
	private UUID id;
	private String fullName;
	private String email;
	private boolean active;
	private Set<Role> roles;
}
