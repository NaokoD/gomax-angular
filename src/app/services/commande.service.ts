import { Injectable } from '@angular/core';
import { Commande } from '../models/commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private commande : Commande) {
    commande.idClient = 1;
   }
}
