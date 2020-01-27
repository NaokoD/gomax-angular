<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Siege } from '../../models/siege';
=======
import { Component, OnInit, Input } from '@angular/core';
import { Siege } from '../../models/siege';
import { SiegeRow } from '../../models/siege-row';
>>>>>>> refs/remotes/origin/dev

@Component({
  selector: 'app-siege-row',
  templateUrl: './siege-row.component.html',
  styleUrls: ['./siege-row.component.css']
})
export class SiegeRowComponent implements OnInit {
<<<<<<< HEAD
  sieges : Siege[];
=======
  @Input()
  row: SiegeRow;
>>>>>>> refs/remotes/origin/dev

  constructor() { }

  ngOnInit() {
  }

}
