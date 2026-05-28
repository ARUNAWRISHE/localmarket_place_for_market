package com.example.farmkart.dto.user;

import java.util.UUID;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AddressResponse {
	private UUID id;
	private String line1;
	private String line2;
	private String city;
	private String state;
	private String country;
	private String postalCode;
	private String label;
	private boolean isDefault;
}
