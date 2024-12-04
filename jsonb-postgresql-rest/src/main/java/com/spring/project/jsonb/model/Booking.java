package com.spring.project.jsonb.model;

import io.hypersistence.utils.hibernate.type.json.JsonType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Type;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Booking{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Column(columnDefinition = "jsonb", nullable = false)
    @Type(JsonType.class)
    private BookingDetails bookingDetails;


    @ManyToOne
    @JoinColumn(name = "user_id" ,nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "cabin_id",nullable = false)
    private Cabin cabin;


}
