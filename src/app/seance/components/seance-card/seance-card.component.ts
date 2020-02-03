import { Component, OnInit, Input } from '@angular/core';
import { Seance } from '../../models/seance';

@Component({
  selector: 'app-seance-card',
  templateUrl: './seance-card.component.html',
  styleUrls: ['./seance-card.component.css']
})
export class SeanceCardComponent implements OnInit {
  @Input()
  seance: Seance;

  constructor() { }

  ngOnInit() {
  }

}
