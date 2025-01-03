package com.spring.project.json.controller;

import com.spring.project.json.model.Booking;
import com.spring.project.json.model.User;
import com.spring.project.json.service.BookingService;
import com.spring.project.json.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.access.prepost.PreAuthorize;


import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/booking")
public class BookingController {

    private final BookingService bookingService;
    private final UserService userService;

    @PreAuthorize("hasAnyAuthority('ADMIN')")
    @ResponseStatus(HttpStatus.OK)
    @GetMapping
    public List<Booking> findAllBookings() {
        return bookingService.findAllBookings();
    }

    @PreAuthorize("hasAnyAuthority('ADMIN', 'USER')")
    @GetMapping("/user/{username}/bookings")
    public List<Booking> findBookingsByUser(@PathVariable String username) {
        User user = userService.validateAndGetUserByUsername(username);
        return bookingService.findBookingsByUser(user);
    }

    @PreAuthorize("hasAnyAuthority('ADMIN')")
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/{id}")
    public Optional<Booking> findBookingById(@PathVariable String id) {
        return bookingService.findByBookingId(id);
    }

    @PreAuthorize("hasAnyAuthority('ADMIN','USER')")
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public Booking createBooking(@RequestBody Booking booking) {
        return bookingService.save(booking);
    }

/*    @PreAuthorize("hasAnyAuthority('ADMIN','USER')")
    @ResponseStatus(HttpStatus.ACCEPTED)
    @PutMapping("/{id}")
    public Booking updateBooking(@PathVariable String id,@RequestBody Booking booking) {
        return bookingService.update(id,booking);
    }*/

    @PreAuthorize("hasAnyAuthority('ADMIN')")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void deleteBooking(@PathVariable String id) {
        bookingService.delete(id);
    }

}
