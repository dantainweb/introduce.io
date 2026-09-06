package com.godword.repository;

import com.godword.entity.ExampleEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExampleRepository extends JpaRepository<ExampleEntity, Long> {

    List<ExampleEntity> findByNameContainingIgnoreCase(String name);
}
