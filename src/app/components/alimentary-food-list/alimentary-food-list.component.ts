import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/service/api.service';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AlimentaryFood } from '../../models/alimentary.model';

@Component({
  selector: 'app-alimentary-food-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alimentary-food-list.component.html',
  styleUrl: './alimentary-food-list.component.css'
})
export class AlimentaryFoodListComponent implements OnInit {
  alimentaryFood$: Observable<AlimentaryFood[]> = of([]);

  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.alimentaryFood$ = this.apiService.getIngredients().pipe(
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