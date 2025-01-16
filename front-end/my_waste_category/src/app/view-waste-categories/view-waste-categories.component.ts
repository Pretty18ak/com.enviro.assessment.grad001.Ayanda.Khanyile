import { Component } from '@angular/core';
import { WasteCategoryService } from '../services/waste-category.service';
import { WasteCategory } from '../models/waste-category.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DeleteWasteCategoryRequest } from '../models/delete-waste-category-request.model';

@Component({
  selector: 'app-view-waste-categories',
  imports: [CommonModule],
  templateUrl: './view-waste-categories.component.html',
  styleUrl: './view-waste-categories.component.css',
})
export class ViewWasteCategoriesComponent {
  wasteCategories: WasteCategory[] = [];

  constructor(
    private wasteCategoryService: WasteCategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadWasteCategories();
  }

  loadWasteCategories(): void {
    this.wasteCategoryService.getAllCategories().subscribe({
      next: (categories) => {
        this.wasteCategories = categories;
      },
      error: (err) => {
        console.error('Error fetching categories:', err);
        alert('Failed to fetch waste categories.');
      },
    });
  }

  onClickAdd() {
    this.router.navigate(['create-waste-category']);
  }

  onDelete(id: number): void {
    const request = new DeleteWasteCategoryRequest(id);
    if (confirm('Are you sure you want to delete this category?')) {
      this.wasteCategoryService.deleteWasteCategory(request).subscribe({
        next: () => {
          this.wasteCategories = this.wasteCategories.filter(
            (category) => category.id !== id
          );
          alert('Category deleted successfully!');
        },
        error: (err) => {
          console.error('Error deleting category:', err);
          alert('Failed to delete category.');
        },
      });
    }
  }

  onEdit(id: number) {
    this.router.navigate([`/edit-waste-category/${id}`]);
  }
}
