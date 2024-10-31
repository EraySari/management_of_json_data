package com.spring.project.json.handler;

public class CabinNotFoundException extends RuntimeException {
    public CabinNotFoundException(String id) {
        super("Cabin with ID " + id + " not found.");
    }
}