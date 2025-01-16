import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AddWasteCategoryRequest } from '../models/add-waste-category-request.model';
import { AddWasteCategoryResponse } from '../models/add-waste-category-response.model';
import { WasteCategory } from '../models/waste-category.model';
import { DeleteWasteCategoryRequest } from '../models/delete-waste-category-request.model';
import { UpdateWasteCategoryRequest } from '../models/update-waste-category.request.model';

@Injectable({
  providedIn: 'root',
})
export class WasteCategoryService {
  constructor(private http: HttpClient) {}
  public getApiBaseURL(): string {
    return 'http://localhost:8080/api';
  }

  getAllCategories(): Observable<WasteCategory[]> {
    return this.http
      .get<WasteCategory[]>(`${this.getApiBaseURL()}/waste-categories`, {
        withCredentials: true,
      })
      .pipe(
        map((response: any) => {
          if (response.wasteCategories) {
            return response.wasteCategories;
          }
          return response;
        })
      );
  }

  getWasteCategoryById(id: number): Observable<WasteCategory> {
    return this.http.get<WasteCategory>(
      `${this.getApiBaseURL()}/waste-categories/${id}`,
      {
        withCredentials: true,
      }
    );
  }

  addWasteCategory(
    request: AddWasteCategoryRequest
  ): Observable<AddWasteCategoryResponse> {
    return this.http.post<AddWasteCategoryResponse>(
      `${this.getApiBaseURL()}/waste-categories`,
      { ...request.category },
      { withCredentials: true }
    );
  }

  deleteWasteCategory(request: DeleteWasteCategoryRequest): Observable<void> {
    return this.http.delete<void>(
      `${this.getApiBaseURL()}/waste-categories/${request.id}`
    );
  }

  updateCategory(request: UpdateWasteCategoryRequest): Observable<void> {
    return this.http.put<void>(
      `${this.getApiBaseURL()}/waste-categories/${request.id}`,
      request.wasteCategory
    );
  }
}
