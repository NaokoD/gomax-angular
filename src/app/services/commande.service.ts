import {Injectable} from '@angular/core';
import {Commande} from '../models/commande';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import {Client} from '../models/client';

@Injectable({
  providedIn: 'root'
})

export class CommandeService {
  commande: Commande;
  commandeCompleted: boolean = false;

  constructor(private http: HttpClient) {
    // noinspection UnterminatedStatementJS
    this.commande = new Commande(
      null,
      new Client(1),
      null,
      [],
      null
    );
    console.log(this.commande + 'service');
    // this.commande.idClient=1;
  }

  save() {
    console.log(this.commande);
    this.commande.createdOn = new Date();
    this.http.post<Commande>(`${environment.apiBaseUrl}/commandes`, this.commande)
      .subscribe({
        next: x => console.log('Saving'),
        complete: () => console.log('Saved')
      });
  }

  getCommandeById(id: number): Observable<Commande> {
    return this.http.get<Commande>(`${environment.apiBaseUrl}/commandes/${id}`);
  }

  getCommandes(): Observable<Commande[]> {
    return this.http.get<Commande[]>(`${environment.apiBaseUrl}/commandes`);
  }

}
