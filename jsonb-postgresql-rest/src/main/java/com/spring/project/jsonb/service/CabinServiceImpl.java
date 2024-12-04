package com.spring.project.jsonb.service;

import com.spring.project.jsonb.handler.CabinNotFoundException;
import com.spring.project.jsonb.model.Cabin;
import com.spring.project.jsonb.repository.CabinRepository;
import jakarta.persistence.NoResultException;
import lombok.RequiredArgsConstructor;
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
    public Optional<Cabin> findByCabinId(Long id) throws NoResultException {
        return Optional.ofNullable(cabinRepository.findById(id).orElseThrow(() -> new CabinNotFoundException(id)));
    }

    @Override
    public Cabin save(Cabin cabin) {
        return cabinRepository.save(cabin);
    }

/*    @Override
    public Cabin update(Long id,Cabin updatedCabin) {

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
    }*/

    @Override
    public void delete(Long id) {
        if (!cabinRepository.existsById(id)) {
            throw new CabinNotFoundException(id);
        }
        cabinRepository.deleteById(id);
    }
}
