import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../../services/commande.service';
import { Commande } from 'src/app/models/commande';

@Component({
  selector: 'app-commande-summary',
  templateUrl: './commande-summary.component.html',
  styleUrls: ['./commande-summary.component.css']
})
export class CommandeSummaryComponent implements OnInit {
commande : Commande ; 
  
  constructor(private commandeService : CommandeService) { }

  ngOnInit() {
    this.commandeService.commandeCompleted = true;
    this.commande = this.commandeService.commande;
  }

}
