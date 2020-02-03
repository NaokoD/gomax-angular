import { Component, OnInit } from '@angular/core';
import { Row } from '../../models/row';
import {SalleService} from '../../services/salle.service';
import {Salle} from '../../models/salle';
import {Plan} from '../../models/plan';

@Component({
  selector: 'app-salle-plan',
  templateUrl: './salle-plan.component.html',
  styleUrls: ['./salle-plan.component.css']
})
export class SallePlanComponent implements OnInit {
plan: Plan;
/*= [
    {
      id: 'A', sieges : [
        {id: '1', type: 'basic', available: true},
        {id: '2', type: 'handicap', available: true},
        {id: '3', type: 'basic', available: false},
        {id: '4', type: 'corridor', available: true},
        {id: '5', type: 'basic', available: false},
        {id: '6', type: 'basic', available: false},
        {id: '7', type: 'basic', available: true},
        {id: '8', type: 'basic', available: true},
        {id: '9', type: 'basic', available: true},
        {id: '10', type: 'corridor', available: true},
        {id: '11', type: 'handicap', available: true},
        {id: '12', type: 'basic', available: true}
        ]
    },
    {
      id: 'B', sieges : [
        {id: '13', type: 'basic', available: true},
        {id: '14', type: 'handicap', available: false},
        {id: '15', type: 'basic', available: true},
        {id: '16', type: 'corridor', available: true},
        {id: '17', type: 'basic', available: false},
        {id: '18', type: 'basic', available: false},
        {id: '19', type: 'basic', available: true},
        {id: '20', type: 'basic', available: true},
        {id: '21', type: 'basic', available: false},
        {id: '22', type: 'corridor', available: true},
        {id: '23', type: 'handicap', available: true},
        {id: '24', type: 'basic', available: true}
      ]
    },
    {
      id: 'C', sieges : [
        {id: '25', type: 'basic', available: true},
        {id: '26', type: 'handicap', available: false},
        {id: '27', type: 'basic', available: true},
        {id: '28', type: 'corridor', available: true},
        {id: '29', type: 'basic', available: false},
        {id: '30', type: 'basic', available: false},
        {id: '31', type: 'basic', available: true},
        {id: '32', type: 'basic', available: true},
        {id: '33', type: 'basic', available: false},
        {id: '34', type: 'corridor', available: true},
        {id: '35', type: 'handicap', available: true},
        {id: '36', type: 'basic', available: true}
      ]
    },
    {
      id: 'D', sieges : [
        {id: '37', type: 'basic', available: true},
        {id: '38', type: 'handicap', available: false},
        {id: '39', type: 'basic', available: true},
        {id: '40', type: 'corridor', available: true},
        {id: '41', type: 'basic', available: false},
        {id: '42', type: 'basic', available: false},
        {id: '43', type: 'basic', available: true},
        {id: '44', type: 'basic', available: true},
        {id: '45', type: 'basic', available: false},
        {id: '46', type: 'corridor', available: true},
        {id: '47', type: 'handicap', available: true},
        {id: '48', type: 'basic', available: true}
      ]
    },
    {
      id: null, sieges : [
        {id: null, type: 'corridor', available: true},
        {id: null, type: 'corridor', available: false},
        {id: null, type: 'corridor', available: true},
        {id: null, type: 'corridor', available: true},
        {id: null, type: 'corridor', available: false},
        {id: null, type: 'corridor', available: false},
        {id: null, type: 'corridor', available: true},
        {id: null, type: 'corridor', available: true},
        {id: null, type: 'corridor', available: false},
        {id: null, type: 'corridor', available: true},
        {id: null, type: 'corridor', available: true},
        {id: null, type: 'corridor', available: true}
      ]
    },
    {
      id: 'E', sieges : [
        {id: '37', type: 'basic', available: true},
        {id: '38', type: 'handicap', available: false},
        {id: '39', type: 'basic', available: true},
        {id: '40', type: 'corridor', available: true},
        {id: '41', type: 'basic', available: false},
        {id: '42', type: 'basic', available: false},
        {id: '43', type: 'basic', available: true},
        {id: '44', type: 'basic', available: true},
        {id: '45', type: 'basic', available: false},
        {id: '46', type: 'corridor', available: true},
        {id: '47', type: 'handicap', available: true},
        {id: '48', type: 'basic', available: true}
      ]
    }
  ];*/

  constructor(private salleService: SalleService) {
   }

  ngOnInit() {
    this.loadSallePlan(1);
  }

  loadSallePlan(id: number): void {
    this.salleService.getSalleById(id).
      subscribe({
        next: res => {
          this.plan = res.plan;
          console.log(res.plan);
        },
        error: e => console.log(e),
        complete: () => console.log('Complete')
      });
  }
}
