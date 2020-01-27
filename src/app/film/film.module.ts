import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmRoutingModule } from './film-routing.module';
import { DetailFilmComponent } from './components/detail-film/detail-film.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { FilmCardComponent } from './components/film-card/film-card.component';
import { FilmDashboardComponent } from './components/film-dashboard/film-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material.module';




@NgModule({
  declarations: [
    FilmListComponent,
    FilmCardComponent,
    FilmDashboardComponent,
    DetailFilmComponent,
    
  ],
  imports: [
    MaterialModule,
    CommonModule,
    HttpClientModule,
    FilmRoutingModule
  ],
  exports: [
    DetailFilmComponent,
    FilmDashboardComponent,
  ],
})
export class FilmModule { }
