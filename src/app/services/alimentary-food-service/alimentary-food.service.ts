import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlimentaryFood } from '../../models/alimentary.model';

@Injectable({
  providedIn: 'root'
})
export class AlimentaryFoodService {

  private baseUrl = 'http://localhost:8081/api/v1'; 

  constructor(private http: HttpClient) {}

  getIngredients(): Observable<any> {
    return this.http.get<AlimentaryFood>(`${this.baseUrl}/recipes/allIngredients`);
  }
}
