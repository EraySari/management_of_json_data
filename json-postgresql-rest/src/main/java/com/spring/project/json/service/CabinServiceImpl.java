package com.spring.project.json.service;

import com.spring.project.json.dto.CabinDTO;
import com.spring.project.json.handler.CabinNotFoundException;
import com.spring.project.json.mapper.CabinMapper;
import com.spring.project.json.model.Cabin;
import com.spring.project.json.repository.CabinRepository;
import jakarta.persistence.NoResultException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CabinServiceImpl implements CabinService{

    private final CabinRepository cabinRepository;
    private final CabinMapper cabinMapper;

    @Override
    public List<CabinDTO> findAllCabins() {
        return cabinRepository.findAll()
                .stream()
                .map(cabinMapper::map)
                .collect(Collectors.toList());
    }

    @Override
    public Optional<CabinDTO> findByCabinId(Long id){
        Cabin cabin = cabinRepository.findById(id)
                .orElseThrow(() -> new CabinNotFoundException(id));
        return Optional.ofNullable(cabinMapper.map(cabin));    }

    @Override
    public CabinDTO save(CabinDTO cabinDTO) {
        Cabin cabin = cabinMapper.mapDto(cabinDTO);
        return cabinMapper.map(cabinRepository.save(cabin));    }

    @Override
    public CabinDTO update(Long id,CabinDTO cabinDTO) {

        return cabinRepository.findById(id)
                .map(existingCabin -> {
                    existingCabin.setName(cabinDTO.getName());
                    existingCabin.setMaxCapacity(cabinDTO.getMaxCapacity());
                    existingCabin.setDescription(cabinDTO.getDescription());
                    existingCabin.setDiscount(cabinDTO.getDiscount());
                    existingCabin.setRegularPrice(cabinDTO.getRegularPrice());
                    return cabinMapper.map(cabinRepository.save(existingCabin));
                })
                .orElseThrow(() -> new CabinNotFoundException(id));
    }

    @Override
    public void delete(Long id) {

        if (!cabinRepository.existsById(id)) {
            throw new CabinNotFoundException(id);
        }
        cabinRepository.deleteById(id);
    }
}
