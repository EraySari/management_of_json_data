package com.spring.project.json.mapper;

import com.spring.project.json.dto.CabinDTO;
import com.spring.project.json.model.Cabin;
import org.springframework.stereotype.Component;

@Component
public class CabinMapper implements ObjectMapper<Cabin, CabinDTO> {

    @Override
    public CabinDTO map(Cabin cabin) {
        if (cabin == null) {
            return null;
        }
        return new CabinDTO(
                cabin.getId(),
                cabin.getName(),
                cabin.getMaxCapacity(),
                cabin.getDescription(),
                cabin.getDiscount(),
                cabin.getRegularPrice()
        );
    }

    @Override
    public Cabin mapDto(CabinDTO cabinDTO) {
        if (cabinDTO == null) {
            return null;
        }
        return new Cabin(
                cabinDTO.getId(),
                cabinDTO.getName(),
                cabinDTO.getMaxCapacity(),
                cabinDTO.getDescription(),
                cabinDTO.getDiscount(),
                cabinDTO.getRegularPrice()
        );
    }
}
