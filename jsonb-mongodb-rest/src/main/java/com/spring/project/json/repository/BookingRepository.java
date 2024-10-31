package com.spring.project.json.repository;

import com.spring.project.json.model.Booking;
import com.spring.project.json.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookingRepository extends MongoRepository<Booking, String> {

    List<Booking> findBookingsByUser(User user);

}
