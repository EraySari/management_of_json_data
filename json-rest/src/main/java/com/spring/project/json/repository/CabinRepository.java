package com.spring.project.json.repository;

import com.spring.project.json.model.Cabin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CabinRepository extends JpaRepository<Cabin, Long> {
}
