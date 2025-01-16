import { WasteCategory } from './waste-category.model';

export class UpdateWasteCategoryRequest {
  constructor(public id: number, public wasteCategory: WasteCategory) {}
}
