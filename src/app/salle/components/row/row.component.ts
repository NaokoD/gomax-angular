import {Component, OnInit, Input, ViewChildren, QueryList} from '@angular/core';
import {Row} from '../../models/row';
import { Siege } from 'src/app/siege/models/siege';
import { SiegeComponent } from 'src/app/siege/components/siege/siege.component';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {
  @Input()
  row: Row;

  constructor() {
  }

  ngOnInit() {
    console.log(this.row);
  }
}
