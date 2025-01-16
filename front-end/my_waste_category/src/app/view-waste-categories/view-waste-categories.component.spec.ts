import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWasteCategoriesComponent } from './view-waste-categories.component';

describe('ViewWasteCategoriesComponent', () => {
  let component: ViewWasteCategoriesComponent;
  let fixture: ComponentFixture<ViewWasteCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewWasteCategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewWasteCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
