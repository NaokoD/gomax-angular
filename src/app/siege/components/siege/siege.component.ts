import { Component, OnInit } from '@angular/core';
import { Siege } from '../../models/siege';

@Component({
  selector: 'app-siege',
  templateUrl: './siege.component.html',
  styleUrls: ['./siege.component.css']
})
export class SiegeComponent implements OnInit {
siege : Siege;

  constructor() { }

  ngOnInit() { }

}

