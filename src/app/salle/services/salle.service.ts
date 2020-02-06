import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Salle } from '../models/salle';
import { environment } from 'src/environments/environment';

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
}
