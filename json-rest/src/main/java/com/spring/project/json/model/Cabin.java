package com.spring.project.json.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Cabin extends BaseEntity{

    private Integer maxCapacity;
    private String description;
    private Integer discount;
    private Integer regularPrice;

    @OneToMany(mappedBy = "cabin", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Booking> bookings;

}
