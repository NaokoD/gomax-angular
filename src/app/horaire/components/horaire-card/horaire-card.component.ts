import { Component, OnInit, Input } from '@angular/core';
import { Horaire } from '../../models/horaire';

@Component({
  selector: 'app-horaire-card',
  templateUrl: './horaire-card.component.html',
  styleUrls: ['./horaire-card.component.css']
})
export class HoraireCardComponent implements OnInit {
  @Input()
  horaire: Horaire;

  constructor() { }

  ngOnInit() {
  }

}
