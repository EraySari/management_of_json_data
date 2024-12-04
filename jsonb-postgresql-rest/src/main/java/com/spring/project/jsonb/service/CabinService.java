package com.spring.project.jsonb.service;

import com.spring.project.jsonb.model.Cabin;

import java.util.List;
import java.util.Optional;

public interface CabinService {

    List<Cabin> findAllCabins();

    Optional<Cabin> findByCabinId(Long id);

    Cabin save(Cabin cabin);

//    Cabin update(Long id,Cabin cabin);

    void delete(Long id);


}
