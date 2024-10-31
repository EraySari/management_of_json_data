package com.spring.project.json.service;

import com.spring.project.json.model.Booking;
import com.spring.project.json.model.User;


import java.util.List;
import java.util.Optional;

public interface BookingService {

    List<Booking> findAllBookings();

    List<Booking> findBookingsByUser(User user);

    Optional<Booking> findByBookingId(Long id);

    Booking save(Booking booking);

//    Booking update(Long id,Booking booking);

    void delete(Long id);
}
