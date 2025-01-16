import { Component } from '@angular/core';
import { WasteCategoryService } from '../services/waste-category.service';
import {
  AddWasteCategory,
  AddWasteCategoryRequest,
} from '../models/add-waste-category-request.model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-waste-category',
  templateUrl: './create-waste-category.component.html',
  imports: [FormsModule],
  styleUrl: './create-waste-category.component.css',
})
export class CreateWasteCategoryComponent {
  constructor(
    private wasteCategoryService: WasteCategoryService,
    private router: Router
  ) {}

  newCategory: AddWasteCategory = {
    name: '',
    description: '',
  };

  addCategory(): void {
    if (this.newCategory.name && this.newCategory.description) {
      this.wasteCategoryService
        .addWasteCategory(new AddWasteCategoryRequest(this.newCategory))
        .subscribe(
          (response) => {
            console.log('Category created successfully:', response);
            alert('Category created successfully!');
            this.router.navigate(['waste-categories']);
          },
          (error) => {
            console.error('Error creating category:', error);
            alert('Failed to create category. Please try again.');
          }
        );
    } else {
      alert('Please fill in all fields.');
    }
  }

  onBack() {
    this.router.navigate(['waste-categories']);
  }
}
