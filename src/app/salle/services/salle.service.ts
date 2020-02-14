import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Salle } from '../models/salle';
import { environment } from 'src/environments/environment';
import { Plan } from '../models/plan';

@Injectable({
  providedIn: 'root'
})
export class SalleService {
  constructor(private http: HttpClient) { }

  getSalles(): Observable<Salle[]> {
    return this.http.get<Salle[]>(`${environment.apiBaseUrl}/salles`);
  }

  getSalleById(id: number): Observable<Salle> {
    return this.http.get<Salle>(`${environment.apiBaseUrl}/salles/${id}`);
  }

  getPlanBySalleById(id: number): Observable<Plan> {
    return this.http.get<Plan>(`${environment.apiBaseUrl}/salles/${id}/plan`);
  }
}
