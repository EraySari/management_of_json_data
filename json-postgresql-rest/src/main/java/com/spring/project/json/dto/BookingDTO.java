package com.spring.project.json.dto;

import com.spring.project.json.model.Cabin;
import com.spring.project.json.model.User;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BookingDTO {

    private Long id;

    @NotNull(message = "IsPaid is mandatory")
    private Boolean isPaid;

    @NotNull(message = "CabinPrice is mandatory")
    @Min(value = 1,message = "CabinPrice must be least 1 ")
    private Float cabinPrice;

    @NotNull(message = "ExtrasPrice is mandatory")
    @Min(value = 1,message = "ExtrasPrice must be least 1 ")
    private Float extrasPrice;

    @NotNull(message = "TotalPrice is mandatory")
    @Min(value = 1,message = "TotalPrice must be least 1 ")
    private Float totalPrice;

    @NotBlank(message = "Status is mandatory")
    @Size(min = 3, max = 20, message = "Name must be between 3 and 20 characters")
    private String status;

    @NotNull(message = "StartDate is mandatory")
    private Date startDate;

    @NotNull(message = "EndDate is mandatory")
    private Date endDate;

    @NotNull(message = "NumNights is mandatory")
    @Min(value = 1,message = "NumNights must be least 1 ")
    private Integer numNights;

    @NotNull(message = "NumGuests is mandatory")
    @Min(value = 1,message = "NumGuests must be least 1 ")
    private Integer numGuests;

    @NotNull(message = "User Id is mandatory")
    private User user;

    @NotNull(message = "Cabin Id is mandatory")
    private Cabin cabin;

}
