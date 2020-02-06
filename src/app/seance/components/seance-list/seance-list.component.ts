import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Seance } from '../../models/seance';
import { SeanceService } from '../../services/seance.service';
import { Observable } from 'rxjs';
import { SeanceCardComponent } from '../seance-card/seance-card.component';


@Component({
  selector: 'app-seance-list',
  templateUrl: './seance-list.component.html',
  styleUrls: ['./seance-list.component.css']
})
export class SeanceListComponent implements OnInit {

  seances: Seance[] = [
    { idSeance: 1, date: 'lundi', salleId: '2', filmId: '4', horaire: '20H15' },
    { idSeance: 2, date: 'mardi', salleId: '2', filmId: '5', horaire: '20H15' }
  ];

  seances$: Observable<Seance[]>;
  @ViewChildren(SeanceCardComponent)
  seancesQuery: QueryList<SeanceCardComponent>;

  // create attribute => <portee> <nom>:<type>
  // Angular use constructor for DI
  constructor(private seanceService: SeanceService) { }

  /**
   * Description
   */
  ngOnInit() {
    this.loadSeancesObservable();
  }

  loadSeancesObservable() {
    this.seanceService.getSeancesObservable()
      .subscribe(res => this.seances = res);

    this.seances$ = this.seanceService.getSeancesObservable();
  }

}
