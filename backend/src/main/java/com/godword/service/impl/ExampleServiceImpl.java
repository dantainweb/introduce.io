package com.godword.service.impl;

import com.godword.entity.ExampleEntity;
import com.godword.repository.ExampleRepository;
import com.godword.service.ExampleService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ExampleServiceImpl implements ExampleService {

    private final ExampleRepository exampleRepository;

    @Override
    public List<ExampleEntity> findAll() {
        return exampleRepository.findAll();
    }

    @Override
    public Optional<ExampleEntity> findById(Long id) {
        return exampleRepository.findById(id);
    }

    @Override
    @Transactional
    public ExampleEntity save(ExampleEntity entity) {
        return exampleRepository.save(entity);
    }

    @Override
    @Transactional
    public void deleteById(Long id) {
        exampleRepository.deleteById(id);
    }

    @Override
    public List<ExampleEntity> searchByName(String name) {
        return exampleRepository.findByNameContainingIgnoreCase(name);
    }
}
