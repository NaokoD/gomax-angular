import { Component, OnInit, Input } from '@angular/core';
import { Siege } from '../../models/siege';

@Component({
  selector: 'app-siege',
  templateUrl: './siege.component.html',
  styleUrls: ['./siege.component.css']
})
export class SiegeComponent implements OnInit {
  @Input()
  siege: Siege;

  constructor() { }

  ngOnInit() {
  }

  private toggleAvailability(siege : Siege) : void {
    console.log(siege.id);
    siege.available === true ? siege.available = false : siege.available = true;
  }

}
