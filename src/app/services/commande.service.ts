import { Injectable } from '@angular/core';
import { Commande } from '../models/commande';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CommandeService {
  commande: Commande ;

  constructor(private http: HttpClient) {
    this.commande = new Commande(
      null,
      1,
      null,
      [],
      null
    )
    console.log(this.commande +' service')
    //this.commande.idClient=1;
   }

   save() {
    console.log(this.commande);
    this.commande.createdOn = new Date();
    this.http.post<Commande>(`${environment.apiBaseUrl}/commandes`, this.commande)
    .subscribe({
      next: x => console.log("Saving"),
      complete: () => console.log("Saved")
    });
   }
}
