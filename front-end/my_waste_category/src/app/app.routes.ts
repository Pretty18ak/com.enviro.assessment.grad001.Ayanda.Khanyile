import { Routes } from '@angular/router';
import { ViewWasteCategoriesComponent } from './view-waste-categories/view-waste-categories.component';
import { CreateWasteCategoryComponent } from './create-waste-category/create-waste-category.component';
import { EditWasteCategoryComponent } from './edit-waste-category/edit-waste-category.component';

export const routes: Routes = [
  { path: 'waste-categories', component: ViewWasteCategoriesComponent },
  { path: 'create-waste-category', component: CreateWasteCategoryComponent },
  { path: 'edit-waste-category/:id', component: EditWasteCategoryComponent },
  { path: '', redirectTo: 'waste-categories', pathMatch: 'full' },
];
