package com.spring.project.json.service;

import com.spring.project.json.dto.BookingDTO;
import com.spring.project.json.handler.BookingNotFoundException;
import com.spring.project.json.mapper.BookingMapper;
import com.spring.project.json.model.Booking;
import com.spring.project.json.model.Cabin;
import com.spring.project.json.model.User;
import com.spring.project.json.repository.BookingRepository;
import jakarta.persistence.NoResultException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BookingServiceImpl implements BookingService {

    private final BookingRepository bookingRepository;
    private final BookingMapper bookingMapper;

    @Override
    public List<BookingDTO> findAllBookings() {
        return bookingRepository.findAll().stream()
                .map(bookingMapper::map)
                .collect(Collectors.toList());
    }

    @Override
    public List<BookingDTO> findBookingsByUser(User user) {
        List<Booking> bookings=bookingRepository.findBookingsByUser(user);
        return bookings.stream().map(bookingMapper::map).collect(Collectors.toList());
    }

    @Override
    public Optional<BookingDTO> findByBookingId(Long id)  {
        Booking booking =bookingRepository.findById(id).orElseThrow(() -> new BookingNotFoundException(id));
        return Optional.ofNullable(bookingMapper.map(booking));
    }

    @Override
    public BookingDTO save(BookingDTO bookingDTO) {
        Booking booking = bookingMapper.mapDto(bookingDTO);
        return bookingMapper.map(bookingRepository.save(booking));
    }

    @Override
    public BookingDTO update(Long id, BookingDTO bookingDTO) {
        return bookingRepository.findById(id)
                .map(existingBooking->{
                    existingBooking.setIsPaid(bookingDTO.getIsPaid());
                    existingBooking.setCabinPrice(bookingDTO.getCabinPrice());
                    existingBooking.setExtrasPrice(bookingDTO.getExtrasPrice());
                    existingBooking.setTotalPrice(bookingDTO.getTotalPrice());
                    existingBooking.setStartDate(bookingDTO.getStartDate());
                    existingBooking.setEndDate(bookingDTO.getEndDate());
                    existingBooking.setNumGuests(bookingDTO.getNumGuests());
                    existingBooking.setNumNights(bookingDTO.getNumNights());
                    existingBooking.setStatus(bookingDTO.getStatus());
                    existingBooking.setCabin(bookingDTO.getCabin());
                    existingBooking.setUser(bookingDTO.getUser());

                    return bookingMapper.map(bookingRepository.save(existingBooking));
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
