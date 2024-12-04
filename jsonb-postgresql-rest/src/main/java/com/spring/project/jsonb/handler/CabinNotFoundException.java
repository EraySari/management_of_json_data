package com.spring.project.jsonb.handler;

public class CabinNotFoundException extends RuntimeException {
    public CabinNotFoundException(Long id) {
        super("Cabin with ID " + id + " not found.");
    }
}