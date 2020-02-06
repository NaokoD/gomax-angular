import { Component, OnInit, Input } from '@angular/core';
import { Seance } from '../../models/seance';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-seance-card',
  templateUrl: './seance-card.component.html',
  styleUrls: ['./seance-card.component.css']
})
export class SeanceCardComponent implements OnInit {
  @Input()
  seance: Seance;



  constructor(/*private commandeService: CommandeService*/) { }

  ngOnInit() {
  }

  ajouterSeanceACommande(id : number){
  }

}
