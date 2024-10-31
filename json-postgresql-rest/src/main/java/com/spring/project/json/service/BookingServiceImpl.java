package com.spring.project.json.service;

import com.spring.project.json.handler.BookingNotFoundException;
import com.spring.project.json.model.Booking;
import com.spring.project.json.model.User;
import com.spring.project.json.repository.BookingRepository;
import jakarta.persistence.NoResultException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BookingServiceImpl implements BookingService {

    private final BookingRepository bookingRepository;

    @Override
    public List<Booking> findAllBookings() {
        return bookingRepository.findAll();
    }

    @Override
    public List<Booking> findBookingsByUser(User user) {
        return bookingRepository.findBookingsByUser(user);
    }

    @Override
    public Optional<Booking> findByBookingId(Long id)  {
        return Optional.ofNullable(bookingRepository.findById(id).orElseThrow(() -> new BookingNotFoundException(id)));
    }

    @Override
    public Booking save(Booking booking) {
        return bookingRepository.save(booking);
    }

    @Override
    public Booking update(Long id, Booking booking) {
        return bookingRepository.findById(id)
                .map(existingBooking->{
                    existingBooking.setIsPaid(booking.getIsPaid());
                    existingBooking.setCabinPrice(booking.getCabinPrice());
                    existingBooking.setExtrasPrice(booking.getExtrasPrice());
                    existingBooking.setTotalPrice(booking.getTotalPrice());
                    existingBooking.setStartDate(booking.getStartDate());
                    existingBooking.setEndDate(booking.getEndDate());
                    existingBooking.setNumGuests(booking.getNumGuests());
                    existingBooking.setNumNights(booking.getNumNights());
                    existingBooking.setStatus(booking.getStatus());
                    existingBooking.setCabin(booking.getCabin());
                    existingBooking.setUser(booking.getUser());

                    return bookingRepository.save(existingBooking);
                })
                .orElseThrow(() -> new BookingNotFoundException(id));

    }

    @Override
    public void delete(Long id) {
        if (!bookingRepository.existsById(id)) {
            throw new BookingNotFoundException(id);
        }
        bookingRepository.deleteById(id);
    }
}
