import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import { Snack } from '../../models/snack';
import { SnackListComponent } from '../snack-list/snack-list.component';
import { Panier } from 'src/app/models/panier';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-snack-dashboard',
  templateUrl: './snack-dashboard.component.html',
  styleUrls: ['./snack-dashboard.component.css']
})

export class SnackDashboardComponent implements OnInit {

  btnDisabled = false;

  @ViewChild('mainTitle', { static: false, read: ElementRef })
  mainTitle: ElementRef;

  @ViewChild(SnackListComponent, { static: false })
  snackList: SnackListComponent;

  // récupérer des classes du DOM

  @ViewChild(SnackListComponent, { static: false, read: true })
  snackListElementRef: ElementRef;

  //snackInc: Snack[] = new Array();

  constructor(private panierService: PanierService) { }

  ngOnInit() {

  }

  filtrerSnacksIncrementes(snack: Snack) {

    for (let i = 0; i < this.snackList.snacks.length; i++) {
      let snack = this.snackList.snacks[i];
      if (snack.qte > 0) { //
        //this.snackInc.push(snack)
        this.panierService.panier.commandeSnack.push(snack);
      }
    }
    this.btnDisabled = !this.btnDisabled;
  }

  // listeSnacksPanier() {
  // }

}
