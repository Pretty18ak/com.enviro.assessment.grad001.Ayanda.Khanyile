import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWasteCategoryComponent } from './edit-waste-category.component';

describe('EditWasteCategoryComponent', () => {
  let component: EditWasteCategoryComponent;
  let fixture: ComponentFixture<EditWasteCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditWasteCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditWasteCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
