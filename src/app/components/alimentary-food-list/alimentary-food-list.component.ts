import { Component, OnInit } from '@angular/core';
import { AlimentaryFoodService } from '../../services/alimentary-food-service/alimentary-food.service';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AlimentaryFood } from '../../models/alimentary.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-alimentary-food-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './alimentary-food-list.component.html',
  styleUrl: './alimentary-food-list.component.css'
})
export class AlimentaryFoodListComponent implements OnInit {
  alimentaryFood$: Observable<AlimentaryFood[]> = of([]);

  constructor(private alimentaryFoodService: AlimentaryFoodService) {}
  ngOnInit(): void {
    this.alimentaryFood$ = this.alimentaryFoodService.getIngredients().pipe(
      tap((data: AlimentaryFood[]) => {
        console.log('Data fetched:', data);
      }),
      catchError(error => {
        console.error('Error fetching data from API:', error);
        return of([]);  // Retorna un array vacío en caso de error
      })
    );
  }
}