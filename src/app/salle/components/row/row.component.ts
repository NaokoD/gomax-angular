import { Component, OnInit, Input } from '@angular/core';
import { Siege } from 'src/app/siege/models/siege';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {
  @Input()
  row : Siege[];
  
  constructor() { }

  ngOnInit() {
  }

}
