import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Seance } from '../../models/seance';
import { SeanceService } from '../../services/seance.service';
import { filter } from 'rxjs/operators';
import { SeanceCardComponent } from '../seance-card/seance-card.component';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-seance-list',
  templateUrl: './seance-list.component.html',
  styleUrls: ['./seance-list.component.css']
})
export class SeanceListComponent implements OnInit {

<<<<<<< HEAD
  seances: Seance[];
=======
  seances: Seance[] = [
    { idSeance: 1, date: 'lundi', salleId: '2', filmId: '4', horaire: '20H15' },
    { idSeance: 2, date: 'mardi', salleId: '2', filmId: '5', horaire: '20H15' }
  ];
>>>>>>> 97e58ca4c71521e24a76f55b34b735bcf890f3ff

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
  }

  loadSeancesByFilm(idFilm : number) {
    this.seanceService.getSeancesByFilm(idFilm)
      .subscribe({
        next : res => {
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
        next : res => {
          this.seances = res;
          console.log(res)
        },
        error: e => console.log(e),
        complete: () => console.log('Complete')
      });
  }

}
