import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Seance } from '../../models/seance';
import { SeanceService } from '../../services/seance.service';
import { filter } from 'rxjs/operators';
import { SeanceCardComponent } from '../seance-card/seance-card.component';


@Component({
  selector: 'app-seance-list',
  templateUrl: './seance-list.component.html',
  styleUrls: ['./seance-list.component.css']
})
export class SeanceListComponent implements OnInit {

  seances: Seance[];

  @ViewChildren(SeanceCardComponent)
  seancesQuery: QueryList<SeanceCardComponent>;

  // create attribute => <portee> <nom>:<type>
  // Angular use constructor for DI
  constructor(private seanceService: SeanceService) { }

  /**
   * Description
   */
  ngOnInit() {
    this.loadSeances();
  }

  loadSeances() {
    this.seanceService.getSeances()
      .subscribe({
        next : res => {
          this.seances = res;
          console.log(res)
        },
        error: e => console.log(e),
        complete: () => console.log('Complete')
      });
  }

}
