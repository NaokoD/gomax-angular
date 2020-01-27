import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { DetailFilmComponent } from './film/components/detail-film/detail-film.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmDashboardComponent } from './film/components/film-dashboard/film-dashboard.component';
import { FilmListComponent } from './film/components/film-list/film-list.component';
import { FilmCardComponent } from './film/components/film-card/film-card.component';
import { SeanceListComponent } from './seance/components/seance-list/seance-list.component';
import { SeanceModule } from './seance/seance.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DetailFilmComponent,
    FilmDashboardComponent,
    FilmListComponent,
    FilmCardComponent,
    SeanceListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    SeanceModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
