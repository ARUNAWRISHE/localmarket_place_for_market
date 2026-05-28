package com.example.farmkart.dto.review;

import java.util.UUID;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class ProductReviewRequest {
	@NotNull
	private UUID productId;

	@Min(1)
	@Max(5)
	private int rating;

	private String comment;
}
