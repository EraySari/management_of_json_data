package com.spring.project.jsonb.repository;

import com.spring.project.jsonb.model.Booking;
import com.spring.project.jsonb.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {

    List<Booking> findBookingsByUser(User user);

}
