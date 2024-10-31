package com.spring.project.json.service;

import com.spring.project.json.model.Cabin;

import java.util.List;
import java.util.Optional;

public interface CabinService {

    List<Cabin> findAllCabins();

    Optional<Cabin> findByCabinId(String id);

    Cabin save(Cabin cabin);

//    Cabin update(String id,Cabin cabin);

    void delete(String id);


}
