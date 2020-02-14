import { Component, OnInit } from '@angular/core';
import { Row } from '../../models/row';
import {SalleService} from '../../services/salle.service';
import {Plan} from '../../models/plan';
import { ActivatedRoute } from '@angular/router';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-salle-plan',
  templateUrl: './salle-plan.component.html',
  styleUrls: ['./salle-plan.component.css']
})
export class SallePlanComponent implements OnInit {
plan: Plan;
visible : boolean = true;

  constructor(private route: ActivatedRoute, private commandeService: CommandeService, private salleService: SalleService) {
   }

  ngOnInit() {
    this.loadSallePlan(1);
  }

  loadSallePlan(id: number): void {
    this.salleService.getPlanBySalleById(id).
      subscribe({
        next: res => {
          console.log(res.rows);
          this.plan = res;
          console.log(res);
          console.log(this.plan);
          console.log(this.plan.rows);
        },
        error: e => console.log(e),
        complete: () => console.log('Complete')
      });
  }
}
