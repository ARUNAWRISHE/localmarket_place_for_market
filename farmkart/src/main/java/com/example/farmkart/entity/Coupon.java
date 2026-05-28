package com.example.farmkart.entity;

import java.math.BigDecimal;
import java.time.Instant;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "coupons")
@Getter
@Setter
public class Coupon extends BaseEntity {
	@Column(nullable = false, unique = true)
	private String code;

	@Column(nullable = false)
	private BigDecimal discountPercentage;

	@Column
	private BigDecimal maxDiscount;

	@Column
	private BigDecimal minOrderAmount;

	@Column
	private Instant validFrom;

	@Column
	private Instant validTo;

	@Column
	private boolean active = true;
}
