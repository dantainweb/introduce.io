package com.godword.service;

import com.godword.entity.ExampleEntity;

import java.util.List;
import java.util.Optional;

public interface ExampleService {

    List<ExampleEntity> findAll();

    Optional<ExampleEntity> findById(Long id);

    ExampleEntity save(ExampleEntity entity);

    void deleteById(Long id);

    List<ExampleEntity> searchByName(String name);
}
