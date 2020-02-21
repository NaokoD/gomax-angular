import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Horaire } from '../models/horaire';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HoraireService {
  constructor(private http: HttpClient) { }

  getHoraireById(id: number): Observable<Horaire> {
    return this.http.get<Horaire>(`${environment.apiBaseUrl}/horaires/${id}`);
  }

  getHoraires(): Observable<Horaire[]> {
    return this.http.get<Horaire[]>(`${environment.apiBaseUrl}/horaires`);
  }

  getHorairesByFilm(idFilm: number): Observable<Horaire[]> {
    return this.http.get<Horaire[]>(`${environment.apiBaseUrl}/films/${idFilm}/horaires`);
  }
}
