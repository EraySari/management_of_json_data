package com.spring.project.json.model;

import io.hypersistence.utils.hibernate.type.json.JsonType;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.Type;
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

    @Column(columnDefinition = "jsonb",nullable = false)
    @Type(JsonType.class)
    private CabinDetails cabins;





}
