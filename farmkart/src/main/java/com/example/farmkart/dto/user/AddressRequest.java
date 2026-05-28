package com.example.farmkart.dto.user;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class AddressRequest {
	@NotBlank
	private String line1;
	private String line2;
	@NotBlank
	private String city;
	@NotBlank
	private String state;
	@NotBlank
	private String country;
	@NotBlank
	private String postalCode;
	private String label;
	private boolean isDefault;
}
