import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Snack } from '../../models/snack';
import { SnackListComponent } from '../snack-list/snack-list.component';

@Component({
  selector: 'app-snack-dashboard',
  templateUrl: './snack-dashboard.component.html',
  styleUrls: ['./snack-dashboard.component.css']
})
export class SnackDashboardComponent implements OnInit {

  @ViewChild('mainTitle', { static: false, read: ElementRef })
  mainTitle: ElementRef;

  //conf static:false => lié quand il est complétement chargé
  @ViewChild(SnackListComponent, { static: false })
  snackList: SnackListComponent;

  @ViewChild(SnackListComponent, { read: true, static: false })
  snackListElementRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }
  addProduct(snack: Snack) {
    console.log('product submitted by form', snack);
    this.snackList.snacks.push(snack);
  }


}
