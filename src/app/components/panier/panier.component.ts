import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';
import { Snack } from 'src/app/snack/models/snack';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  displayedColumns: string[] = ['nom', 'taille', 'prix', 'categorie', 'quantite'];
  dataSource : Snack[] = [];

  constructor(private commandeService : CommandeService) {
    this.dataSource = this.commandeService.commande.snacks;
   }

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