package com.spring.project.json.service;

import com.spring.project.json.dto.BookingDTO;
import com.spring.project.json.model.Booking;
import com.spring.project.json.model.User;
import jakarta.validation.Valid;
import org.springframework.validation.annotation.Validated;


import java.util.List;
import java.util.Optional;

@Validated
public interface BookingService {

    List<BookingDTO> findAllBookings();

    List<BookingDTO> findBookingsByUser(User user);

    Optional<BookingDTO> findByBookingId(Long id);

    BookingDTO save(@Valid BookingDTO bookingDTO);

    BookingDTO update(Long id,@Valid BookingDTO bookingDTO);

    void delete(Long id);
}
