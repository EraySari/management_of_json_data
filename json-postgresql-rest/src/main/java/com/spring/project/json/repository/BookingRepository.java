package com.spring.project.json.repository;

import com.spring.project.json.model.Booking;
import com.spring.project.json.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {

    List<Booking> findBookingsByUser(User user);

    List<Booking> findByUser(User user);

}
