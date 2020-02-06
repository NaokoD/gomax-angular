import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarif } from '../models/tarif';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TarifService {

  constructor(private http : HttpClient) { }

  getTarifs():Observable<Tarif[]>{
    return this.http.get<Tarif[]>(`${environment.apiBaseUrl}/tarifs`);
  }

}
