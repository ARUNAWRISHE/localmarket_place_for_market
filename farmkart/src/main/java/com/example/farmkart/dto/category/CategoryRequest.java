package com.example.farmkart.dto.category;

import java.util.UUID;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class CategoryRequest {
	@NotBlank
	private String name;
	private UUID parentId;
}
