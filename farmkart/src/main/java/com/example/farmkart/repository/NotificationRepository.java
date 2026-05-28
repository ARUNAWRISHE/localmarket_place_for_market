package com.example.farmkart.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.farmkart.entity.Notification;

public interface NotificationRepository extends JpaRepository<Notification, UUID> {
	List<Notification> findByUserId(UUID userId);
}
