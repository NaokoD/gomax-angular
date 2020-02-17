import {Component, OnInit, Input} from '@angular/core';
import {Row} from '../../models/row';

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
    this.rowSorted.id = this.row.id;
    this.rowSorted.siege.push(this.row.siege[0]);
    for (const i in this.row.siege) {
            }
  }

}
