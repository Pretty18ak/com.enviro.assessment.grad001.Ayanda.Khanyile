import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWasteCategoryComponent } from './create-waste-category.component';

describe('CreateWasteCategoryComponent', () => {
  let component: CreateWasteCategoryComponent;
  let fixture: ComponentFixture<CreateWasteCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateWasteCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateWasteCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
