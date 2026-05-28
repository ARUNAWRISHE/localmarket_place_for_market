package com.example.farmkart.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.farmkart.dto.category.CategoryRequest;
import com.example.farmkart.dto.category.CategoryResponse;
import com.example.farmkart.entity.Category;
import com.example.farmkart.exception.NotFoundException;
import com.example.farmkart.repository.CategoryRepository;
import com.example.farmkart.service.CategoryService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {
	private final CategoryRepository categoryRepository;

	@Override
	public CategoryResponse create(CategoryRequest request) {
		Category category = new Category();
		category.setName(request.getName());
		if (request.getParentId() != null) {
			Category parent = categoryRepository.findById(request.getParentId())
					.orElseThrow(() -> new NotFoundException("Parent category not found"));
			category.setParent(parent);
		}
		categoryRepository.save(category);
		return toResponse(category);
	}

	@Override
	public List<CategoryResponse> list() {
		return categoryRepository.findAll().stream().map(this::toResponse).toList();
	}

	private CategoryResponse toResponse(Category category) {
		return CategoryResponse.builder()
				.id(category.getId())
				.name(category.getName())
				.parentId(category.getParent() != null ? category.getParent().getId() : null)
				.build();
	}
}
