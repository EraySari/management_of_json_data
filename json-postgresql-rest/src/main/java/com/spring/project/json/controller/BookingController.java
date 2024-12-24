package com.spring.project.json.controller;

import com.spring.project.json.dto.BookingDTO;
import com.spring.project.json.dto.UserDTO;
import com.spring.project.json.mapper.UserMapper;
import com.spring.project.json.model.Booking;
import com.spring.project.json.model.User;
import com.spring.project.json.service.BookingService;
import com.spring.project.json.service.UserService;
import jakarta.validation.Valid;
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
    private final UserMapper userMapper;

    @PreAuthorize("hasAnyAuthority('ADMIN')")
    @ResponseStatus(HttpStatus.OK)
    @GetMapping
    public List<BookingDTO> findAllBookings() {
        return bookingService.findAllBookings();
    }

    @PreAuthorize("hasAnyAuthority('ADMIN', 'USER')")
    @GetMapping("/user/{username}/bookings")
    public List<BookingDTO> findBookingsByUser(@PathVariable String username) {
        User user = userService.validateAndGetUserByUsernamee(username);
        return bookingService.findBookingsByUser(user);
    }

    @PreAuthorize("hasAnyAuthority('ADMIN','USER')")
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/{id}")
    public Optional<BookingDTO> findBookingById(@PathVariable Long id) {
        return bookingService.findByBookingId(id);
    }

    @PreAuthorize("hasAnyAuthority('ADMIN','USER')")
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public BookingDTO createBooking(@Valid @RequestBody BookingDTO bookingDTO) {
        return bookingService.save(bookingDTO);
    }

    @PreAuthorize("hasAnyAuthority('ADMIN','USER')")
    @ResponseStatus(HttpStatus.ACCEPTED)
    @PutMapping("/{id}")
    public BookingDTO updateBooking(@PathVariable Long id,@Valid @RequestBody BookingDTO bookingDTO) {
        return bookingService.update(id,bookingDTO);
    }

    @PreAuthorize("hasAnyAuthority('ADMIN')")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void deleteBooking(@PathVariable Long id) {
        bookingService.delete(id);
    }

}
