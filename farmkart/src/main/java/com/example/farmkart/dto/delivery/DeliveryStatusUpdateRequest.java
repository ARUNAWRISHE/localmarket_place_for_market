package com.example.farmkart.dto.delivery;

import com.example.farmkart.constants.DeliveryStatus;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class DeliveryStatusUpdateRequest {
	@NotNull
	private DeliveryStatus status;
}
