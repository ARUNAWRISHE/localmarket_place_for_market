package com.example.farmkart.dto.product;

import java.math.BigDecimal;
import java.util.UUID;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class ProductRequest {
	@NotBlank
	private String name;
	private String description;
	@NotNull
	private BigDecimal price;
	@NotNull
	private Integer stockQuantity;
	private boolean organicCertified;
	private UUID categoryId;
}
