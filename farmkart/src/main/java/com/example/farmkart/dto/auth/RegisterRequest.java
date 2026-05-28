package com.example.farmkart.dto.auth;

import java.util.Set;

import com.example.farmkart.constants.Role;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class RegisterRequest {
	@NotBlank
	private String fullName;

	@Email
	@NotBlank
	private String email;

	@NotBlank
	private String password;

	private String phone;

	@NotEmpty
	private Set<Role> roles;
}
