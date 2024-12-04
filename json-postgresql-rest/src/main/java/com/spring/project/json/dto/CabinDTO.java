package com.spring.project.json.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
//@JsonInclude(JsonInclude.Include.NON_NULL)
public class CabinDTO {

    private Long id;

    @NotBlank(message = "Name is mandatory")
    @Size(min = 3, max = 20, message = "Name must be between 3 and 20 characters")
    private String name;

    @NotNull(message = "MaxCapacity is mandatory")
    @Min(value = 1,message = "MaxCapacity must be least 1 capacity")
    private Integer maxCapacity;

    @NotBlank(message = "Description is mandatory")
    @Size(min = 3, max = 60, message = "Username must be between 3 and 60 characters")
    private String description;

    @NotNull(message = "Discount is mandatory")
    @Min(value = 1,message = "Discount must be least 1 ")
    private Integer discount;

    @NotNull(message = "RegularPrice is mandatory")
    @Min(value = 1,message = "RegularPrice must be least 1 ")
    private Integer regularPrice;
}
