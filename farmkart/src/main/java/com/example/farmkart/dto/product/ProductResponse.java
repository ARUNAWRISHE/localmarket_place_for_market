package com.example.farmkart.dto.product;

import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ProductResponse {
	private UUID id;
	private UUID sellerId;
	private UUID categoryId;
	private String name;
	private String description;
	private BigDecimal price;
	private int stockQuantity;
	private boolean organicCertified;
	private BigDecimal ratingAverage;
	private List<String> imageUrls;
}
