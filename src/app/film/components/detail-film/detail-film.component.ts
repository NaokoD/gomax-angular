import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../services/film.service';
import { Film } from '../../models/film';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.css']
})
export class DetailFilmComponent implements OnInit {

  film: Film;
  router: any;

  constructor(private route: ActivatedRoute, private FilmService: FilmService) { }

  ngOnInit() {
    //let paramId: number;
    //this.route.paramMap.subscribe(params => paramId = parseInt(params.get('id'), 10));

    const id: number = this.route.snapshot.params.id;
    this.loadGetFilmViewObservable(id);
  }


  loadGetFilmViewObservable(id: number) {
    this.FilmService.getFilmsViewObservable(id)
      .subscribe(res => this.film = res);

    //this.products$ = this.productService.getProductViewObservable();
  }

}
