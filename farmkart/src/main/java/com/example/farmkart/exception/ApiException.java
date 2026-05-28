package com.example.farmkart.exception;

public class ApiException extends RuntimeException {
	public ApiException(String message) {
		super(message);
	}
}
