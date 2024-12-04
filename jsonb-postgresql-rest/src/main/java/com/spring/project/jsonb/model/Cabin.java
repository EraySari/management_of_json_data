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
public class Cabin{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "jsonb",nullable = false)
    @Type(JsonType.class)
    private CabinDetails cabins;







}