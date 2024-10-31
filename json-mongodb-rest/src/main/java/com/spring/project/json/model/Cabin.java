package com.spring.project.json.model;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.mongodb.core.mapping.Document;

import java.sql.Timestamp;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "cabin")
public class Cabin{

    @Id
    private String id;

    private String name;
    private Integer maxCapacity;
    private String description;
    private Integer discount;
    private Integer regularPrice;



    public Cabin(String name, Integer maxCapacity, String description, Integer discount, Integer regularPrice) {
        this.name = name;
        this.maxCapacity = maxCapacity;
        this.description = description;
        this.discount = discount;
        this.regularPrice = regularPrice;

    }

}
