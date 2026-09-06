package com.godword.controller;

import com.godword.dto.ApiResponse;
import com.godword.entity.ExampleEntity;
import com.godword.service.ExampleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/examples")
@RequiredArgsConstructor
public class ExampleController {

    private final ExampleService exampleService;

    @GetMapping
    public ApiResponse<List<ExampleEntity>> getAll() {
        return ApiResponse.success(exampleService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<ExampleEntity>> getById(@PathVariable Long id) {
        return exampleService.findById(id)
                .map(entity -> ResponseEntity.ok(ApiResponse.success(entity)))
                .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(ApiResponse.error(404, "Resource not found")));
    }

    @PostMapping
    public ResponseEntity<ApiResponse<ExampleEntity>> create(@RequestBody ExampleEntity entity) {
        ExampleEntity saved = exampleService.save(entity);
        return ResponseEntity.status(HttpStatus.CREATED).body(ApiResponse.success(saved));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<ExampleEntity>> update(
            @PathVariable Long id,
            @RequestBody ExampleEntity entity) {
        return exampleService.findById(id)
                .map(existing -> {
                    entity.setId(id);
                    return ResponseEntity.ok(ApiResponse.success(exampleService.save(entity)));
                })
                .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(ApiResponse.error(404, "Resource not found")));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> delete(@PathVariable Long id) {
        return exampleService.findById(id)
                .map(existing -> {
                    exampleService.deleteById(id);
                    return ResponseEntity.ok(ApiResponse.<Void>success(null));
                })
                .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(ApiResponse.error(404, "Resource not found")));
    }

    @GetMapping("/search")
    public ApiResponse<List<ExampleEntity>> search(@RequestParam String name) {
        return ApiResponse.success(exampleService.searchByName(name));
    }
}
