import { Component, OnInit, ViewChild } from '@angular/core';
import { Row } from '../../models/row';
import {SalleService} from '../../services/salle.service';
import {Plan} from '../../models/plan';
import { ActivatedRoute } from '@angular/router';
import { CommandeService } from 'src/app/services/commande.service';
import {Salle} from '../../models/salle';
import { RowComponent } from '../row/row.component';
import { MajorationService } from 'src/app/services/majoration.service';
import { Majoration } from 'src/app/models/majoration';

@Component({
  selector: 'app-salle-plan',
  templateUrl: './salle-plan.component.html',
  styleUrls: ['./salle-plan.component.css']
})
export class SallePlanComponent implements OnInit {
plan: Plan;
salle: Salle;
visible: boolean = true;
nbDeSiegesASelectionner : number;
majorations : Majoration[];
nbSieges: number;

  constructor(private route: ActivatedRoute, private commandeService: CommandeService, private salleService: SalleService, private majorationService : MajorationService) {
   }

  ngOnInit() {
    //console.log(this.commandeService.commande.seance);
    if(this.commandeService.commande.seance !== null) {
      this.loadSallePlan(this.commandeService.commande.seance.salle.id);
      this.loadMajorations();
      this.nbDeSiegesASelectionner = 0;
      if(this.commandeService.commande.tarifs !== null || this.commandeService.commande.tarifs != []){
        for(let tarif of this.commandeService.commande.tarifs){
          this.nbDeSiegesASelectionner += tarif.quantite;
        }
      }
      this.nbSieges = this.nbDeSiegesASelectionner;
      //console.log(this.commandeService.commande);
    } else {
      this.loadSallePlan(1);
      this.loadMajorations();
    }
  }

  loadSallePlan(id: number): void {
    this.salleService.getPlanBySalleById(id)
      .subscribe({
        next: res => {
          this.plan = res;
        },
        error: e => console.log(e),
        complete: () => {
          console.log('Complete');
          for(let i of this.plan.row){
            i.siege.sort((obj1, obj2) => {
              if (obj1.position > obj2.position) {
                  return 1;
              }
              if (obj1.position < obj2.position) {
                  return -1;
              }
              return 0;
          });
          }
          console.log(this.plan);
          console.log(this.plan.row);
        }
      });
  }

  loadMajorations(): void{
    this.majorationService.getMajorations()
    .subscribe({
      next: res => {
        this.majorations = res;
      },
      error: e => console.log(e),
      complete: () => console.log("Complete")
    })
  }

  getMajorationByName(name : string): Majoration{
    for(let majorarion of this.majorations){
      if(majorarion.libelle === name){
        return majorarion;
      }
    }
    return null;
  }

  calculSieges(x : number){
    this.nbDeSiegesASelectionner += x;
  }
}
