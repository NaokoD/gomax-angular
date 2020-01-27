import { Component, OnInit, Input } from '@angular/core';
import { SiegeRow } from '../../models/siege-row';

@Component({
  selector: 'app-siege-row',
  templateUrl: './siege-row.component.html',
  styleUrls: ['./siege-row.component.css']
})
export class SiegeRowComponent implements OnInit {
  @Input()
  row: SiegeRow;

  constructor() { }

  ngOnInit() {
  }

}
