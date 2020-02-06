import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Film } from '../../models/film';
import { Observable } from 'rxjs';
import { FilmCardComponent } from '../film-card/film-card.component';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  films: Film[] = [
    new Film(1, 'Joker', 'Action', 112, 'https://via.placeholder.com/240x325', ''),
    new Film(2, 'Bad Boys 3', 'Action', 123, 'https://via.placeholder.com/240x325', ''),
    new Film(3, 'Jumanji', 'Action', 120, 'https://via.placeholder.com/240x325', ''),
    new Film(4, 'Les incognitos', 'Animation', 80, 'https://via.placeholder.com/240x325', '')
  ];
  films$: Observable<Film[]>;
  @ViewChildren(FilmCardComponent)
  filmsQuery: QueryList<FilmCardComponent>;

  // create attribute => <portee> <nom>:<type>
  // Angular use constructor for DI
  constructor(private filmService: FilmService) { }

  /**
   * Description
   */
  ngOnInit() {
    this.loadFilmsObservable();
  }

  loadFilmsObservable() {
    this.filmService.getFilmsObservable()
      .subscribe(res => this.films = res);

    this.films$ = this.filmService.getFilmsObservable();
  }


}
