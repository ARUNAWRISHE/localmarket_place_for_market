package com.example.farmkart.exception;

public class BadRequestException extends ApiException {
	public BadRequestException(String message) {
		super(message);
	}
}
