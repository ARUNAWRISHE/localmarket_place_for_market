package com.example.farmkart.service;

import java.util.List;
import java.util.UUID;

import com.example.farmkart.dto.notification.NotificationResponse;

public interface NotificationService {
	List<NotificationResponse> list();
	void markRead(UUID id);
}
