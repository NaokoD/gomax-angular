import { Component, OnInit, Input } from '@angular/core';
import { Snack } from '../../models/snack';

@Component({
  selector: 'app-snack-card',
  templateUrl: './snack-card.component.html',
  styleUrls: ['./snack-card.component.css']
})
export class SnackCardComponent implements OnInit {

  btnDisabled = false;

  @Input()
  snack: Snack;

  constructor() { }

  ngOnInit() {
    this.snack.qte = 0;
  }

  actionBtnPlus() {
    if(this.snack.qte >= 0) {
      this.snack.qte++;
      console.log(this.snack);
    }
  }

  actionBtnMoins() {
    if(this.snack.qte > 0) {
      this.snack.qte--;
      console.log(this.snack);
    }
  }



}
