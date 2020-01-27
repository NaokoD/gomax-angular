import { Component, OnInit, Input } from '@angular/core';
import { Snack } from '../../models/snack';

@Component({
  selector: 'app-snack-card',
  templateUrl: './snack-card.component.html',
  styleUrls: ['./snack-card.component.css']
})
export class SnackCardComponent implements OnInit {
  @Input()
  snack: Snack;

  constructor() { }

  ngOnInit() {
  }






}
