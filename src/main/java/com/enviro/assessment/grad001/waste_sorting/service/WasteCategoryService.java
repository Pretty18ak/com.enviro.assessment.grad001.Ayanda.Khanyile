package com.enviro.assessment.grad001.waste_sorting.service;

import com.enviro.assessment.grad001.waste_sorting.model.WasteCategory;
import com.enviro.assessment.grad001.waste_sorting.repository.WasteCategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WasteCategoryService {

    private final WasteCategoryRepository repository;

    public WasteCategoryService(WasteCategoryRepository repository) {
        this.repository = repository;
    }

    public List<WasteCategory> getAllCategories() {
        return repository.findAll();
    }

    public WasteCategory getCategoryById(Long id) {
        return repository.findById(id).orElseThrow(() -> new RuntimeException("Category not found with id: " + id));
    }

    public Long createCategory(WasteCategory category) {
        validateCategory(category);
        WasteCategory savedCategory = repository.save(category);
        return savedCategory.getId();
    }


    public WasteCategory updateCategory(Long id, WasteCategory updatedCategory) {
        validateCategory(updatedCategory);
        WasteCategory existingCategory = getCategoryById(id);
        existingCategory.setName(updatedCategory.getName());
        existingCategory.setDescription(updatedCategory.getDescription());
        return repository.save(existingCategory);
    }

    public void deleteCategory(Long id) {
        if (!repository.existsById(id)) {
            throw new RuntimeException("Category not found with id: " + id);
        }
        repository.deleteById(id);
    }

    private void validateCategory(WasteCategory category) {
        if (category.getName() == null || category.getName().isEmpty()) {
            throw new IllegalArgumentException("Category name is required");
        }
        if (category.getDescription() == null || category.getDescription().isEmpty()) {
            throw new IllegalArgumentException("Description is required");
        }
    }
}
