package com.example.farmkart.dto.notification;

import java.util.UUID;

import com.example.farmkart.constants.NotificationType;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class NotificationResponse {
	private UUID id;
	private NotificationType type;
	private String message;
	private boolean read;
}
