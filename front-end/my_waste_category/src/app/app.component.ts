import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ViewWasteCategoriesComponent } from './view-waste-categories/view-waste-categories.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my_waste_category';
}
