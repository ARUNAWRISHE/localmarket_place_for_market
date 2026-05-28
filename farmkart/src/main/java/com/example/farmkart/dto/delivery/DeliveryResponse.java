package com.example.farmkart.dto.delivery;

import java.util.UUID;

import com.example.farmkart.constants.DeliveryStatus;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class DeliveryResponse {
	private UUID id;
	private UUID orderId;
	private DeliveryStatus status;
}
