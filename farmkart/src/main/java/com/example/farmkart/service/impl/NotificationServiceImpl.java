package com.example.farmkart.service.impl;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.example.farmkart.dto.notification.NotificationResponse;
import com.example.farmkart.entity.Notification;
import com.example.farmkart.entity.User;
import com.example.farmkart.exception.NotFoundException;
import com.example.farmkart.repository.NotificationRepository;
import com.example.farmkart.repository.UserRepository;
import com.example.farmkart.security.SecurityUtils;
import com.example.farmkart.service.NotificationService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class NotificationServiceImpl implements NotificationService {
	private final NotificationRepository notificationRepository;
	private final UserRepository userRepository;

	@Override
	public List<NotificationResponse> list() {
		User user = getCurrentUser();
		return notificationRepository.findByUserId(user.getId()).stream().map(this::toResponse).toList();
	}

	@Override
	public void markRead(UUID id) {
		Notification notification = notificationRepository.findById(id)
				.orElseThrow(() -> new NotFoundException("Notification not found"));
		notification.setRead(true);
		notificationRepository.save(notification);
	}

	private User getCurrentUser() {
		String email = SecurityUtils.getCurrentUserEmail().orElseThrow(() ->
				new NotFoundException("User not found"));
		return userRepository.findByEmail(email)
				.orElseThrow(() -> new NotFoundException("User not found"));
	}

	private NotificationResponse toResponse(Notification notification) {
		return NotificationResponse.builder()
				.id(notification.getId())
				.type(notification.getType())
				.message(notification.getMessage())
				.read(notification.isRead())
				.build();
	}
}
