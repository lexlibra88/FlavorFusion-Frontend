import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-ingredient-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ingredient-list.component.html',
  styleUrl: './ingredient-list.component.css'
})
export class IngredientListComponent implements OnInit {
  recipes$: Observable<Recipe[]> = of([]);
  formattedRecipes$: Observable<any[]> = of([]);

  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.recipes$ = this.apiService.getIngredients().pipe(
      tap((data: Recipe[]) => {
        console.log('Data fetched:', data);
      }),
      catchError(error => {
        console.error('Error fetching data from API:', error);
        return of([]);  // Retorna un array vacío en caso de error
      })
    );

    this.formattedRecipes$ = this.recipes$.pipe(
      map((recipes: Recipe[]) => {
        if (!recipes || recipes.length === 0) {
          return [];
        }
        return recipes.map((recipe: Recipe) => {
          if (!recipe || !recipe.ingredients) {
            console.error('Invalid recipe or ingredients:', recipe);
            return { ...recipe, formattedIngredients: '' };
          }
          const formattedIngredients = recipe.ingredients.map(ingredient => {
            if (!ingredient || !ingredient.nameAlimentaryFood) {
              console.error('Invalid ingredient:', ingredient);
              return '';
            }
            return ingredient.nameAlimentaryFood;
          }).join(', ');
          return { ...recipe, formattedIngredients };
        });
      }),
      catchError(error => {
        console.error('Error formatting recipes:', error);
        return of([]);  // Retorna un array vacío en caso de error
      })
    );
  }
}