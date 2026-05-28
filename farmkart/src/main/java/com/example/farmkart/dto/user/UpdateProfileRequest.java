package com.example.farmkart.dto.user;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class UpdateProfileRequest {
	@NotBlank
	private String fullName;

	private String phone;

	private String profileImageUrl;
}
