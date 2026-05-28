package com.example.farmkart.dto.review;

import java.util.UUID;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ReviewResponse {
	private UUID id;
	private int rating;
	private String comment;
}
