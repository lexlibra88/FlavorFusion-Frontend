import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ingredient-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ingredient-list.component.html',
  styleUrl: './ingredient-list.component.css'
})
export class IngredientListComponent {
  recipes: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getIngredients().subscribe((data) => {
      this.recipes = data;
    });
  }
}
