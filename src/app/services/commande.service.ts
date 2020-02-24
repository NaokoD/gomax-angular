import {Injectable} from '@angular/core';
import {Commande} from '../models/commande';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import {Client} from '../models/client';
import { Siege } from '../siege/models/siege';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CommandeService {
  commande: Commande;
  commandeCompleted: boolean = false;
  siegesUsed: Siege[];

  constructor(private http: HttpClient) {
    // noinspection UnterminatedStatementJS
    this.commande = new Commande(
      null,
      new Client(1),
      null,
      [],
      null,
      []
    );
    console.log(this.commande + 'service');
    // this.commande.idClient=1;
  }

  save() {
    console.log(this.commande);
    console.log(this.commande);
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

  getCommandesByIdSeance(idSeance: number): Observable<Commande[]> {
    return this.http.get<Commande[]>(`${environment.apiBaseUrl}/commandes?seanceId=${idSeance}`);
  }

  getSiegesUsedByIdSeance(idSeance: number): Observable<Siege[]> {
    return this.http.get<Commande[]>(`${environment.apiBaseUrl}/sieges/seances/${idSeance}`);
   /* let commandes : Commande[];
    this.getCommandesByIdSeance(idSeance)
    .subscribe({
      next: commandesMap => {
        commandes = commandesMap;
        console.log(commandes);
      },
      error: e => console.log(e),
      complete: () => {
        console.log('Complete');
        let sieges : number[] = [];
        for(const commande of commandes){
          if(commande.sieges.length>0){
            for(const siege of commande.sieges)
              sieges.push(Number(siege.id));
          }
        }
        this.siegesUsed=sieges;
        console.log(this.siegesUsed);
      }
    });*/
  }
}
