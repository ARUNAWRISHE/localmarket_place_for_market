package com.example.farmkart.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.farmkart.entity.AdminLog;

public interface AdminLogRepository extends JpaRepository<AdminLog, UUID> {
}
