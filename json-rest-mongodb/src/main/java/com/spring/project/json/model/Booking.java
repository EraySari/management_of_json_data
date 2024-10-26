package com.spring.project.json.model;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.sql.Timestamp;
import java.util.Date;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "booking")
public class Booking{

    @Id
    private String id;

    private Boolean isPaid;
    private Float cabinPrice;
    private Float extrasPrice;
    private Float totalPrice;
    private String status;
    private Date startDate;
    private Date endDate;
    private Integer numNights;
    private Integer numGuests;

    @DBRef
    private User user;

    @DBRef
    private Cabin cabin;

}
