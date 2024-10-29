package com.spring.project.json.service;

import com.spring.project.json.handler.CabinNotFoundException;
import com.spring.project.json.model.Cabin;
import com.spring.project.json.repository.CabinRepository;
import jakarta.persistence.NoResultException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CabinServiceImpl implements CabinService{

    private final CabinRepository cabinRepository;

    @Override
    public List<Cabin> findAllCabins() {
        return cabinRepository.findAll();
    }

    @Override
    public Optional<Cabin> findByCabinId(String id) throws NoResultException {
        return Optional.ofNullable(cabinRepository.findById(id).orElseThrow(() -> new CabinNotFoundException(id)));
    }

    @Override
    public Cabin save(Cabin cabin) {
        return cabinRepository.save(cabin);
    }

    @Override
    public Cabin update(String id,Cabin updatedCabin) {

        return cabinRepository.findById(id)
                .map(existingCabin -> {
                    existingCabin.setMaxCapacity(updatedCabin.getMaxCapacity());
                    existingCabin.setDescription(updatedCabin.getDescription());
                    existingCabin.setDiscount(updatedCabin.getDiscount());
                    existingCabin.setRegularPrice(updatedCabin.getRegularPrice());
                    existingCabin.setName(updatedCabin.getName());

                    return cabinRepository.save(existingCabin);
                })
                .orElseThrow(() -> new CabinNotFoundException(id));
    }

    @Override
    public void delete(String id) {
        if (!cabinRepository.existsById(id)) {
            throw new CabinNotFoundException(id);
        }
        cabinRepository.deleteById(id);
    }
}
