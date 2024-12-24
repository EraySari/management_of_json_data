package com.spring.project.json.mapper;

import com.spring.project.json.dto.BookingDTO;
import com.spring.project.json.model.Booking;
import org.springframework.stereotype.Component;

@Component
public class BookingMapper implements ObjectMapper<Booking, BookingDTO> {
    @Override
    public BookingDTO map(Booking booking) {
        if (booking == null){
            return null;
        }

        return new BookingDTO(
                booking.getId(),
                booking.getIsPaid(),
                booking.getCabinPrice(),
                booking.getExtrasPrice(),
                booking.getTotalPrice(),
                booking.getStatus(),
                booking.getStartDate(),
                booking.getEndDate(),
                booking.getIsBreakfast(),
                booking.getNumNights(),
                booking.getNumGuests(),
                booking.getUser(),
                booking.getCabin()
        );
    }

    @Override
    public Booking mapDto(BookingDTO bookingDTO) {

        if (bookingDTO == null){
            return null;
        }

        return new Booking(
                bookingDTO.getId(),
                bookingDTO.getIsPaid(),
                bookingDTO.getCabinPrice(),
                bookingDTO.getExtrasPrice(),
                bookingDTO.getTotalPrice(),
                bookingDTO.getStatus(),
                bookingDTO.getStartDate(),
                bookingDTO.getEndDate(),
                bookingDTO.getIsBreakfast(),
                bookingDTO.getNumNights(),
                bookingDTO.getNumGuests(),
                bookingDTO.getUser(),
                bookingDTO.getCabin()
        );
    }
}
