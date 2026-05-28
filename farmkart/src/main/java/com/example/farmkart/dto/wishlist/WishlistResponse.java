package com.example.farmkart.dto.wishlist;

import java.util.UUID;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class WishlistResponse {
	private UUID id;
	private UUID productId;
}
