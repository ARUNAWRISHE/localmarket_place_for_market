package com.example.farmkart.dto.delivery;

import java.math.BigDecimal;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class DeliveryEarningsResponse {
	private BigDecimal totalEarnings;
	private long totalDeliveries;
}
