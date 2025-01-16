import { WasteCategory } from './waste-category.model';

export class GetAllCategoriesResponse {
  constructor(public wasteCategories: WasteCategory[]) {}
}
