import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Seance } from '../../models/seance';
import { SeanceService } from '../../services/seance.service';
import { filter } from 'rxjs/operators';
import { SeanceCardComponent } from '../seance-card/seance-card.component';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Horaire } from 'src/app/horaire/models/horaire';
import { Salle } from 'src/app/salle/models/salle';
import { Film } from 'src/app/film/models/film';


@Component({
  selector: 'app-seance-list',
  templateUrl: './seance-list.component.html',
  styleUrls: ['./seance-list.component.css']
})
export class SeanceListComponent implements OnInit {

  films: Film[];
  seances: Seance[];
  horaires: Horaire[];



  @ViewChildren(SeanceCardComponent)
  seancesQuery: QueryList<SeanceCardComponent>;

  // create attribute => <portee> <nom>:<type>
  // Angular use constructor for DI
  constructor(private route: ActivatedRoute, private seanceService: SeanceService) { }

  /**
   * Description
   */
  ngOnInit() {
    const id: number = this.route.snapshot.params.id;
    this.loadSeancesByFilm(id);
    /* this.loadSeances(); */
  }

  loadSeancesByFilm(id: number) {
    this.seanceService.getSeancesByFilm(id)
      .subscribe({
        next: res => {
          this.seances = res;
          console.log(res)
        },
        error: e => console.log(e),
        complete: () => console.log('Complete')
      });
  }

  loadSeances() {
    this.seanceService.getSeances()
      .subscribe({
        next: res => {
          this.seances = res;
          console.log(res)
        },
        error: e => console.log(e),
        complete: () => console.log('Complete')
      });
  }

}
