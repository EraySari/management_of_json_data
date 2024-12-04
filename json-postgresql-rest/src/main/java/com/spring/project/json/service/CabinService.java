package com.spring.project.json.service;

import com.spring.project.json.dto.CabinDTO;
import com.spring.project.json.model.Cabin;
import jakarta.validation.Valid;
import org.springframework.validation.annotation.Validated;

import java.util.List;
import java.util.Optional;

@Validated
public interface CabinService {

    List<CabinDTO> findAllCabins();

    Optional<CabinDTO> findByCabinId(Long id);

    CabinDTO save(@Valid CabinDTO cabinDTO);

    CabinDTO update(Long id,@Valid CabinDTO cabinDTO);

    void delete(Long id);


}
