import {Component, OnInit, Input} from '@angular/core';
import {Row} from '../../models/row';
import { Siege } from 'src/app/siege/models/siege';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {
  @Input()
  row: Row;

  rowSorted: Row;

  constructor() {
  }

  ngOnInit() {
    console.log(this.row);
    this.rowSorted = new Row(this.row.id, this.row.siege);
  }

}
