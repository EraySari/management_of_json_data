package com.spring.project.json.controller;

import com.spring.project.json.model.Cabin;
import com.spring.project.json.service.CabinService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/cabins")
public class CabinController {

    private final CabinService cabinService;

    @GetMapping
    public List<Cabin> findAllCabins() {
        return cabinService.findAllCabins();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public Cabin createBook(@RequestBody Cabin cabin) {
        return cabinService.save(cabin);
    }

    @DeleteMapping("/{id}")
    public void deleteCabin(@PathVariable Long id) {
        cabinService.delete(id);
    }



}
