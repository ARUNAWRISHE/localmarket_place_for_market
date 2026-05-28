package com.example.farmkart.exception;

public class UnauthorizedException extends ApiException {
	public UnauthorizedException(String message) {
		super(message);
	}
}
