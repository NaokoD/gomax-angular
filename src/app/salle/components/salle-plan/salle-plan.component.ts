import { Component, OnInit } from '@angular/core';
import { SiegeRow } from '../../../siege/models/siege-row';

@Component({
  selector: 'app-salle-plan',
  templateUrl: './salle-plan.component.html',
  styleUrls: ['./salle-plan.component.css']
})
export class SallePlanComponent implements OnInit {
<<<<<<< HEAD
  
=======
plan: SiegeRow[] = [
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
        {id: '1', type: 'basic', available: true},
        {id: '2', type: 'handicap', available: false},
        {id: '3', type: 'basic', available: true},
        {id: '4', type: 'corridor', available: true},
        {id: '5', type: 'basic', available: false},
        {id: '6', type: 'basic', available: false},
        {id: '7', type: 'basic', available: true},
        {id: '8', type: 'basic', available: true},
        {id: '9', type: 'basic', available: false},
        {id: '10', type: 'corridor', available: true},
        {id: '11', type: 'handicap', available: true},
        {id: '12', type: 'basic', available: true}
      ]
    },
  {
    id: 'C', sieges : [
      {id: '1', type: 'basic', available: true},
      {id: '2', type: 'handicap', available: false},
      {id: '3', type: 'basic', available: true},
      {id: '4', type: 'corridor', available: true},
      {id: '5', type: 'basic', available: false},
      {id: '6', type: 'basic', available: false},
      {id: '7', type: 'basic', available: true},
      {id: '8', type: 'basic', available: true},
      {id: '9', type: 'basic', available: false},
      {id: '10', type: 'corridor', available: true},
      {id: '11', type: 'handicap', available: true},
      {id: '12', type: 'basic', available: true}
    ]
  },
  {
    id: 'D', sieges : [
      {id: '1', type: 'basic', available: true},
      {id: '2', type: 'handicap', available: false},
      {id: '3', type: 'basic', available: true},
      {id: '4', type: 'corridor', available: true},
      {id: '5', type: 'basic', available: false},
      {id: '6', type: 'basic', available: false},
      {id: '7', type: 'basic', available: true},
      {id: '8', type: 'basic', available: true},
      {id: '9', type: 'basic', available: false},
      {id: '10', type: 'corridor', available: true},
      {id: '11', type: 'handicap', available: true},
      {id: '12', type: 'basic', available: true}
    ]
  }
  ];

>>>>>>> refs/remotes/origin/dev
  constructor() { }

  ngOnInit() {
  }

}
