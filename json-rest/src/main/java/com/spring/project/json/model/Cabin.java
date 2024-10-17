package com.spring.project.json.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.sql.Timestamp;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Cabin{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private Integer maxCapacity;
    private String description;
    private Integer discount;
    private Integer regularPrice;

    @OneToMany(mappedBy = "cabin", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Booking> bookings;

    public Cabin(String name, Integer maxCapacity, String description, Integer discount, Integer regularPrice) {
        this.name = name;
        this.maxCapacity = maxCapacity;
        this.description = description;
        this.discount = discount;
        this.regularPrice = regularPrice;

    }

}
