package com.example.farmkart.exception;

public class ForbiddenException extends ApiException {
	public ForbiddenException(String message) {
		super(message);
	}
}
