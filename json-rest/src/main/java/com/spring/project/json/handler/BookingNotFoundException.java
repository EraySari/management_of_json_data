package com.spring.project.json.handler;

public class BookingNotFoundException extends RuntimeException {
    public BookingNotFoundException(Long id) {
        super("Cabin with ID " + id + " not found.");
    }
}
