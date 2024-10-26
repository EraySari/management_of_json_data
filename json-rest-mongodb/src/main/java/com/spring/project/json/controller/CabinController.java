package com.spring.project.json.controller;

import com.spring.project.json.model.Cabin;
import com.spring.project.json.service.CabinService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/cabins")
public class CabinController {

    private final CabinService cabinService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping
    public List<Cabin> findAllCabins() {
        return cabinService.findAllCabins();
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/{id}")
    public Optional<Cabin> findCabinById(@PathVariable String id) {
        return cabinService.findByCabinId(id);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public Cabin createCabin(@RequestBody Cabin cabin) {
        return cabinService.save(cabin);
    }

    @ResponseStatus(HttpStatus.ACCEPTED)
    @PutMapping("/{id}")
    public Cabin updateCabin(@PathVariable String id,@RequestBody Cabin cabin) {
        return cabinService.update(id,cabin);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void deleteCabin(@PathVariable String id) {
        cabinService.delete(id);
    }



}
