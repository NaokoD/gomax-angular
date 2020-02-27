import { Component, OnInit, Input } from '@angular/core';
import { Seance } from '../../models/seance';
import { CommandeService } from 'src/app/services/commande.service';


import { from } from 'rxjs';
import { Salle } from 'src/app/salle/models/salle';
import { SeanceService } from '../../services/seance.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seance-card',
  templateUrl: './seance-card.component.html',
  styleUrls: ['./seance-card.component.css']
})
export class SeanceCardComponent implements OnInit {
  @Input()
  seance: Seance;
  seances: Seance[];

  constructor(private route: ActivatedRoute, private seanceService: SeanceService, private commandeService: CommandeService) { }

  dateNow = new Date();



  ngOnInit() {

  }

  loadNbPlacesRestantesBySeanceById(id: number) {
    this.seanceService.getNbPlacesRestantesBySeanceById(id)
      .subscribe({
        next: res => {
          this.seances = res;
          console.log(res)
        },
        error: e => console.log(e),
        complete: () => console.log('Complete')
      });

  }



  addSeanceToCommande(seances: Seance) {
    this.commandeService.commande.seance = seances;
  }

}