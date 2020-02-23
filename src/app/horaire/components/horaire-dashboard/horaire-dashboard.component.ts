import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SeanceListComponent } from 'src/app/seance/components/seance-list/seance-list.component';
import { HoraireListComponent } from '../horaire-list/horaire-list.component';

@Component({
  selector: 'app-horaire-dashboard',
  templateUrl: './horaire-dashboard.component.html',
  styleUrls: ['./horaire-dashboard.component.css']
})
export class HoraireDashboardComponent implements OnInit {

  @ViewChild('mainTitle', { static: false, read: ElementRef })
  mainTitle: ElementRef;
  //conf static: false => lié quand il est complètment chargé
  @ViewChild(HoraireListComponent, { static: false })
  seanceList: SeanceListComponent;

  // récupérer des classes du DOM
  @ViewChild(HoraireListComponent, { static: false, read: true })
  seanceListElementRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

}
