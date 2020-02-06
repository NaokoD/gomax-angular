import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Seance } from '../models/seance';
import { Observable, of } from 'rxjs';
import { map, filter, reduce } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeanceService {

  constructor(private http: HttpClient) { }

  getSeanceById(id: number): Observable<Seance> {
    return this.http.get<Seance>(`${environment.apiBaseUrl}/seances/${id}`);
  }

  getSeances(): Observable<Seance[]> {
    return this.http.get<Seance[]>(`${environment.apiBaseUrl}/seances`);
  }

  getSeancesByFilm(idFilm : number): Observable<Seance[]> {
    return this.http.get<Seance[]>(`${environment.apiBaseUrl}/films/${idFilm}/seances`);
  }

}
