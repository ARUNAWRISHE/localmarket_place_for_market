package com.example.farmkart.service;

import java.util.List;
import java.util.UUID;

import com.example.farmkart.dto.wishlist.WishlistRequest;
import com.example.farmkart.dto.wishlist.WishlistResponse;

public interface WishlistService {
	WishlistResponse add(WishlistRequest request);
	void remove(UUID id);
	List<WishlistResponse> list();
}
