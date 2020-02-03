import { Component, OnInit, Input } from '@angular/core';
import { Snack } from 'src/app/snack/models/snack';
import { PanierService } from 'src/app/services/panier.service';

const commandeSnack: Snack[] = [
];
//this.snackListComponent.snacks
//saveSnacks(snack: Snack)

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  displayedColumns: string[] = ['nom', 'taille', 'prix', 'categorie', 'quantite'];
  dataSource = commandeSnack;

  @Input()
  snack: Snack;

  constructor(private panierService: PanierService) { }

  ngOnInit() {

  }

  // totalLigne(Snack[]) {
  //   let total = 0;
  //   total = (this.snack.qte) * (this.snack.price);
  // }

  // totalCommande(Snack[]) {
  //   let totalGlobal = 0;
  //   totalGlobal = somme(total[]);
  // }

}














