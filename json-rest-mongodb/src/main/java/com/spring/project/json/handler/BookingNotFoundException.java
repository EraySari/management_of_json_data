package com.spring.project.json.handler;

public class BookingNotFoundException extends RuntimeException {
    public BookingNotFoundException(String id) {
        super("Cabin with ID " + id + " not found.");
    }
}
