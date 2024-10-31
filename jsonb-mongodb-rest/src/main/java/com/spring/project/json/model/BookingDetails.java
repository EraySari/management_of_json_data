package com.spring.project.json.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BookingDetails {
    private Boolean isPaid;
    private Float cabinPrice;
    private Float extrasPrice;
    private Float totalPrice;
    private String status;
    private Date startDate;
    private Date endDate;
    private Integer numNights;
    private Integer numGuests;
}