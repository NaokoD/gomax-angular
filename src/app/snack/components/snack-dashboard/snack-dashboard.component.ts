import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import { Snack } from '../../models/snack';
import { SnackListComponent } from '../snack-list/snack-list.component';
import { CommandeService } from 'src/app/services/commande.service';


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

  snacks: Snack[] = [];
  somme = 0;

  constructor(private commandeService: CommandeService) { }

  ngOnInit() {

  }

  filtrerSnacksIncrementes() {
    if (this.btnDisabled === false) {
      for (let i of this.snackList.snacks) {
        if (i.qte > 0) {
          this.snacks.push(i);
        }
      }
      //console.log(this.snacks);
      this.commandeService.commande.snacks = this.snacks;
      //console.log(this.commandeService.commande)
      this.commandeService.save();
      this.btnDisabled = !this.btnDisabled;
    }
    //console.log(this.snacks);
    this.commandeService.commande.snacks = this.snacks;
    //console.log(this.commandeService.commande)
    this.commandeService.save();
    this.btnDisabled = !this.btnDisabled;
  }

  sommeCommandeSnack() {
    for (let i of this.snackList.snacks) {
      if (i.qte > 0) {
        let montant = i.qte * i.price;
        this.somme += montant;
        // {{ montant | currency:'EUR' }}
      }
    }
    console.log(this.somme);
  }

}


