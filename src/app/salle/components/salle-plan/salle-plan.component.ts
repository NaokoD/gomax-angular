import { Component, OnInit } from '@angular/core';
import { Row } from '../../models/row';
import {SalleService} from '../../services/salle.service';
import {Plan} from '../../models/plan';
import { ActivatedRoute } from '@angular/router';
import { CommandeService } from 'src/app/services/commande.service';
import {Salle} from '../../models/salle';

@Component({
  selector: 'app-salle-plan',
  templateUrl: './salle-plan.component.html',
  styleUrls: ['./salle-plan.component.css']
})
export class SallePlanComponent implements OnInit {
plan: Plan;
salle: Salle;
visible: boolean = true;

  constructor(private route: ActivatedRoute, private commandeService: CommandeService, private salleService: SalleService) {
   }

  ngOnInit() {
    this.loadSallePlan(1);
  }

  loadSallePlan(id: number): void {
    this.salleService.getPlanBySalleById(id).
      subscribe({
        next: res => {
          this.plan = res;
        },
        error: e => console.log(e),
        complete: () => {
          console.log('Complete');
          console.log(this.plan);
          console.log(this.plan.row);

        }
      });
  }
}
