package com.enviro.assessment.grad001.waste_sorting.repository;

import com.enviro.assessment.grad001.waste_sorting.model.WasteCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WasteCategoryRepository extends JpaRepository<WasteCategory, Long> {
}