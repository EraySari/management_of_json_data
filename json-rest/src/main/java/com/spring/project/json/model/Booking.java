package com.spring.project.json.model;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Booking extends BaseEntity{

    private Boolean isPaid;
    private Float cabinPrice;
    private Float extrasPrice;
    private Float totalPrice;
    private String status;
    private Date startDate;
    private Date endDate;
    private Integer numNights;
    private Integer numGuests;

    @ManyToOne
    @JoinColumn(name = "user_id" ,nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "cabin_id",nullable = false)
    private Cabin cabin;
}
