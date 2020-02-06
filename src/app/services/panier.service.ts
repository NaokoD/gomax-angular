import { Injectable } from '@angular/core';
import { Snack } from '../snack/models/snack';
import { Panier } from '../models/panier';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor(public panier: Panier) { }

  //panier: Panier;



}
