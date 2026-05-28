package com.example.farmkart.service;

import java.util.UUID;

import org.springframework.data.domain.Page;

import com.example.farmkart.dto.product.ProductRequest;
import com.example.farmkart.dto.product.ProductResponse;

public interface ProductService {
	ProductResponse create(ProductRequest request);
	ProductResponse update(UUID id, ProductRequest request);
	void delete(UUID id);
	ProductResponse getById(UUID id);
	Page<ProductResponse> list(int page, int size);
	Page<ProductResponse> search(String query, int page, int size);
	Page<ProductResponse> listByCategory(UUID categoryId, int page, int size);
}
