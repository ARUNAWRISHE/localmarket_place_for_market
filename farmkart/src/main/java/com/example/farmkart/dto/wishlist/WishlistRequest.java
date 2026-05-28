package com.example.farmkart.dto.wishlist;

import java.util.UUID;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class WishlistRequest {
	@NotNull
	private UUID productId;
}
