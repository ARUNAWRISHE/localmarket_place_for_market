package com.example.farmkart.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.farmkart.dto.notification.NotificationResponse;
import com.example.farmkart.service.NotificationService;
import com.example.farmkart.util.ApiResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/notifications")
@RequiredArgsConstructor
public class NotificationController {
	private final NotificationService notificationService;

	@GetMapping
	public ResponseEntity<ApiResponse<List<NotificationResponse>>> list() {
		return ResponseEntity.ok(ApiResponse.ok("Notifications fetched", notificationService.list()));
	}

	@PutMapping("/read/{id}")
	public ResponseEntity<ApiResponse<Object>> markRead(@PathVariable UUID id) {
		notificationService.markRead(id);
		return ResponseEntity.ok(ApiResponse.ok("Notification read", null));
	}
}
