import { Component, OnInit } from '@angular/core';
import { Siege } from '../../models/siege';

@Component({
  selector: 'app-siege-row',
  templateUrl: './siege-row.component.html',
  styleUrls: ['./siege-row.component.css']
})
export class SiegeRowComponent implements OnInit {
  sieges : Siege[];

  constructor() { }

  ngOnInit() {
  }

}
