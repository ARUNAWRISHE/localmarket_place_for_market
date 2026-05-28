package com.example.farmkart.service;

import java.util.List;

import com.example.farmkart.dto.category.CategoryRequest;
import com.example.farmkart.dto.category.CategoryResponse;

public interface CategoryService {
	CategoryResponse create(CategoryRequest request);
	List<CategoryResponse> list();
}
