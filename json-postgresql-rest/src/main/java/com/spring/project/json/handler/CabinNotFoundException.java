package com.spring.project.json.handler;

public class CabinNotFoundException extends RuntimeException {
    public CabinNotFoundException(Long id) {
        super("Cabin with ID " + id + " not found.");
    }
}