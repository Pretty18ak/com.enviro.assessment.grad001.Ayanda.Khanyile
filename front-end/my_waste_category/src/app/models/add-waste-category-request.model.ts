export class AddWasteCategoryRequest {
  constructor(public category: AddWasteCategory) {}
}

export class AddWasteCategory {
  constructor(public name: string, public description: string) {}
}
