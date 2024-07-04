import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlimentaryFood } from '../../models/alimentary.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:8081/api/v1'; 

  constructor(private http: HttpClient) {}

  getData(endpoint: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${endpoint}`);
  }

  postData(endpoint: string, data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/${endpoint}`, data);
  }

  getIngredients(): Observable<any> {
    return this.http.get<AlimentaryFood>(`${this.baseUrl}/recipes/allIngredients`);
  }

  // Puedes agregar más métodos según tus necesidades (put, delete, etc.)
}
