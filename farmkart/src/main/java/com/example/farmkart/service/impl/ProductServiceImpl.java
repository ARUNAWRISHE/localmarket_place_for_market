package com.example.farmkart.service.impl;

import java.util.List;
import java.util.UUID;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.example.farmkart.dto.product.ProductRequest;
import com.example.farmkart.dto.product.ProductResponse;
import com.example.farmkart.entity.Category;
import com.example.farmkart.entity.Product;
import com.example.farmkart.entity.ProductImage;
import com.example.farmkart.entity.SellerProfile;
import com.example.farmkart.entity.User;
import com.example.farmkart.exception.NotFoundException;
import com.example.farmkart.repository.CategoryRepository;
import com.example.farmkart.repository.ProductRepository;
import com.example.farmkart.repository.SellerProfileRepository;
import com.example.farmkart.repository.UserRepository;
import com.example.farmkart.security.SecurityUtils;
import com.example.farmkart.service.ProductService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {
	private final ProductRepository productRepository;
	private final CategoryRepository categoryRepository;
	private final SellerProfileRepository sellerProfileRepository;
	private final UserRepository userRepository;

	@Override
	public ProductResponse create(ProductRequest request) {
		SellerProfile seller = getCurrentSeller();
		Product product = new Product();
		product.setSeller(seller);
		applyRequest(product, request);
		productRepository.save(product);
		return toResponse(product);
	}

	@Override
	public ProductResponse update(UUID id, ProductRequest request) {
		Product product = productRepository.findById(id)
				.orElseThrow(() -> new NotFoundException("Product not found"));
		applyRequest(product, request);
		productRepository.save(product);
		return toResponse(product);
	}

	@Override
	public void delete(UUID id) {
		Product product = productRepository.findById(id)
				.orElseThrow(() -> new NotFoundException("Product not found"));
		productRepository.delete(product);
	}

	@Override
	public ProductResponse getById(UUID id) {
		Product product = productRepository.findById(id)
				.orElseThrow(() -> new NotFoundException("Product not found"));
		return toResponse(product);
	}

	@Override
	public Page<ProductResponse> list(int page, int size) {
		return productRepository.findAll(PageRequest.of(page, size)).map(this::toResponse);
	}

	@Override
	public Page<ProductResponse> search(String query, int page, int size) {
		return productRepository.findByNameContainingIgnoreCase(query, PageRequest.of(page, size))
				.map(this::toResponse);
	}

	@Override
	public Page<ProductResponse> listByCategory(UUID categoryId, int page, int size) {
		return productRepository.findByCategoryId(categoryId, PageRequest.of(page, size))
				.map(this::toResponse);
	}

	private void applyRequest(Product product, ProductRequest request) {
		product.setName(request.getName());
		product.setDescription(request.getDescription());
		product.setPrice(request.getPrice());
		product.setStockQuantity(request.getStockQuantity());
		product.setOrganicCertified(request.isOrganicCertified());
		if (request.getCategoryId() != null) {
			Category category = categoryRepository.findById(request.getCategoryId())
					.orElseThrow(() -> new NotFoundException("Category not found"));
			product.setCategory(category);
		}
	}

	private SellerProfile getCurrentSeller() {
		String email = SecurityUtils.getCurrentUserEmail().orElseThrow(() ->
				new NotFoundException("User not found"));
		User user = userRepository.findByEmail(email)
				.orElseThrow(() -> new NotFoundException("User not found"));
		return sellerProfileRepository.findByUserId(user.getId())
				.orElseThrow(() -> new NotFoundException("Seller profile not found"));
	}

	private ProductResponse toResponse(Product product) {
		List<String> imageUrls = product.getImages().stream()
				.map(ProductImage::getImageUrl)
				.toList();
		return ProductResponse.builder()
				.id(product.getId())
				.sellerId(product.getSeller() != null ? product.getSeller().getId() : null)
				.categoryId(product.getCategory() != null ? product.getCategory().getId() : null)
				.name(product.getName())
				.description(product.getDescription())
				.price(product.getPrice())
				.stockQuantity(product.getStockQuantity())
				.organicCertified(product.isOrganicCertified())
				.ratingAverage(product.getRatingAverage())
				.imageUrls(imageUrls)
				.build();
	}
}
