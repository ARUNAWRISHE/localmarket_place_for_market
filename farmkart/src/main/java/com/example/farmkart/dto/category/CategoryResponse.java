package com.example.farmkart.dto.category;

import java.util.UUID;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CategoryResponse {
	private UUID id;
	private String name;
	private UUID parentId;
}
