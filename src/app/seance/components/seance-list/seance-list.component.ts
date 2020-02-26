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
  salle: Salle[];




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
    /*   this.loadSeancesByFilm(id); */
    /* this.loadNbPlacesRestantesBySeanceById(id); */
    /* this.loadSeances(); */
    this.loadSeancesByFilmDuLundi(id);
  }

  idFilm: number = this.route.snapshot.params.id;


  loadSeancesByFilmDuLundi(id: number) {
    this.seanceService.getSeancesByFilmDuLundi(id)
      .subscribe({
        next: res => {
          this.seances = res;
          console.log(res)
        },
        error: e => console.log(e),
        complete: () => console.log('Complete')
      });
  }

  loadSeancesByFilmDuMardi(id: number) {
    this.seanceService.getSeancesByFilmDuMardi(id)
      .subscribe({
        next: res => {
          this.seances = res;
          console.log(res)
        },
        error: e => console.log(e),
        complete: () => console.log('Complete')
      });
  }

  loadSeancesByFilmDuMercredi(id: number) {

    this.seanceService.getSeancesByFilmDuMercredi(id)
      .subscribe({
        next: res => {
          this.seances = res;
          console.log(res)
        },
        error: e => console.log(e),
        complete: () => console.log('Complete')
      });
  }

  loadSeancesByFilmDuJeudi(id: number) {
    this.seanceService.getSeancesByFilmDuJeudi(id)
      .subscribe({
        next: res => {
          this.seances = res;
          console.log(res)
        },
        error: e => console.log(e),
        complete: () => console.log('Complete')
      });
  }

  loadSeancesByFilmDuVendredi(id: number) {

    this.seanceService.getSeancesByFilmDuVendredi(id)
      .subscribe({
        next: res => {
          this.seances = res;
          console.log(res)
        },
        error: e => console.log(e),
        complete: () => console.log('Complete')
      });
  }

  loadSeancesByFilmDuSamedi(id: number) {
    this.seanceService.getSeancesByFilmDuSamedi(id)
      .subscribe({
        next: res => {
          this.seances = res;
          console.log(res)
        },
        error: e => console.log(e),
        complete: () => console.log('Complete')
      });
  }

  loadSeancesByFilmDuDimanche(id: number) {
    this.seanceService.getSeancesByFilmDuDimanche(id)
      .subscribe({
        next: res => {
          this.seances = res;
          console.log(res)
        },
        error: e => console.log(e),
        complete: () => console.log('Complete')
      });
  }


  /* loadSeancesByFilm(id: number) {
    this.seanceService.getSeancesByFilm(id)
      .subscribe({
        next: res => {
          this.seances = res;
          console.log(res)
        },
        error: e => console.log(e),
        complete: () => console.log('Complete')
      });
  } */

  /* loadNbPlacesRestantesBySeanceById(id: number) {
    this.seanceService.getSeancesByFilm(id)
      .subscribe({
        next: res => {
          this.seances = res;
          console.log(res)
        },
        error: e => console.log(e),
        complete: () => console.log('Complete')
      });
    console.log();
  } */

  /*   loadSeances() {
      this.seanceService.getSeances()
        .subscribe({
          next: res => {
            this.seances = res;
            console.log(res)
          },
          error: e => console.log(e),
          complete: () => console.log('Complete')
        });
    } */

}
