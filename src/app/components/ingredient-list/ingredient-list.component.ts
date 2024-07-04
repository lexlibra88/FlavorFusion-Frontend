import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Ingredient } from '../../recipe.model';

@Component({
  selector: 'app-ingredient-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ingredient-list.component.html',
  styleUrl: './ingredient-list.component.css'
})
export class IngredientListComponent implements OnInit {
  ingredients$: Observable<Ingredient[]> = of([]);

  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.ingredients$ = this.apiService.getIngredients().pipe(
      tap((data: Ingredient[]) => {
        console.log('Data fetched:', data);
      }),
      catchError(error => {
        console.error('Error fetching data from API:', error);
        return of([]);  // Retorna un array vacío en caso de error
      })
    );
  }
}