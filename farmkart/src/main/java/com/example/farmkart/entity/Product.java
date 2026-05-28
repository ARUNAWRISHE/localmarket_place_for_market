package com.example.farmkart.entity;

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Index;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "products", indexes = {
		@Index(name = "idx_product_name", columnList = "name"),
		@Index(name = "idx_product_category", columnList = "category_id"),
		@Index(name = "idx_product_seller", columnList = "seller_id")
})
@Getter
@Setter
public class Product extends BaseEntity {
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "seller_id", nullable = false)
	private SellerProfile seller;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "category_id")
	private Category category;

	@Column(nullable = false)
	private String name;

	@Column
	private String description;

	@Column(nullable = false)
	private BigDecimal price;

	@Column(nullable = false)
	private int stockQuantity;

	@Column(nullable = false)
	private boolean organicCertified = false;

	@Column
	private BigDecimal ratingAverage;

	@OneToMany(mappedBy = "product", fetch = FetchType.LAZY)
	private Set<ProductImage> images = new HashSet<>();
}
