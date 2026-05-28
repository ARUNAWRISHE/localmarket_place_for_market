package com.example.farmkart.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
@ConfigurationProperties(prefix = "app.security.jwt")
public class JwtProperties {
	private String secret;
	private String issuer;
	private long accessTokenTtlMinutes;
	private long refreshTokenTtlDays;
}
