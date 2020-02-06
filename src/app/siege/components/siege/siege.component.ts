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

  toggleAvailability(siege : Siege) : void {
    console.log(siege.id);
    if(siege.available === true){
      siege.available = null;
    } else if(siege.available === null){
      siege.available = true;
    }
  }

}
