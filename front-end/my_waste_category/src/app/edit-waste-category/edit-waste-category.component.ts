import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { WasteCategoryService } from '../services/waste-category.service';
import { GetWasteCategoryByIdRequest } from '../models/get-waste-category-by-id-request.model';
import { UpdateWasteCategoryRequest } from '../models/update-waste-category.request.model';
import { WasteCategory } from '../models/waste-category.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-waste-category',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './edit-waste-category.component.html',
  styleUrl: './edit-waste-category.component.css',
})
export class EditWasteCategoryComponent implements OnInit {
  editCategoryForm!: FormGroup;
  categoryId!: number;

  constructor(
    private fb: FormBuilder,
    private wasteCategoryService: WasteCategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.editCategoryForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.categoryId = +this.route.snapshot.paramMap.get('id')!;
    this.loadCategoryDetails();
  }

  loadCategoryDetails(): void {
    this.wasteCategoryService.getWasteCategoryById(this.categoryId).subscribe({
      next: (response) => {
        this.editCategoryForm.patchValue({
          name: response.name,
          description: response.description,
        });
      },
      error: (err) => {
        console.error('Error loading category details:', err);
        alert('Failed to load category details.');
      },
    });
  }

  onSubmit(): void {
    const request = new UpdateWasteCategoryRequest(
      this.categoryId,
      new WasteCategory(
        this.categoryId,
        this.editCategoryForm.get('name')?.value,
        this.editCategoryForm.get('description')?.value
      )
    );

    if (this.editCategoryForm.valid) {
      this.wasteCategoryService.updateCategory(request).subscribe({
        next: () => {
          alert('Category updated successfully!');
          this.router.navigate(['/waste-categories']);
        },
        error: (err) => {
          console.error('Error updating category:', err);
          alert('Failed to update category.');
        },
      });
    }
  }

  onBack(): void {
    this.router.navigate(['/waste-categories']);
  }
}
