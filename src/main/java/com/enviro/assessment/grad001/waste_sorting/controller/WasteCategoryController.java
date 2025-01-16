package com.enviro.assessment.grad001.waste_sorting.controller;

import com.enviro.assessment.grad001.waste_sorting.model.WasteCategory;
import com.enviro.assessment.grad001.waste_sorting.service.WasteCategoryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/waste-categories")
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class WasteCategoryController {

    private final WasteCategoryService service;

    public WasteCategoryController(WasteCategoryService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<WasteCategory>> getAllCategories() {
        return ResponseEntity.ok(service.getAllCategories());
    }

    @GetMapping("/{id}")
    public ResponseEntity<WasteCategory> getCategoryById(@PathVariable Long id) {
        return ResponseEntity.ok(service.getCategoryById(id));
    }

    @PostMapping
    public ResponseEntity<Long> createCategory(@RequestBody WasteCategory category) {
        Long id = service.createCategory(category);
        return new ResponseEntity<>(id, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<WasteCategory> updateCategory(
            @PathVariable Long id, @RequestBody WasteCategory category) {
        return ResponseEntity.ok(service.updateCategory(id, category));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCategory(@PathVariable Long id) {
        service.deleteCategory(id);
        return ResponseEntity.noContent().build();
    }
}
