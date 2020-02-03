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
import { SnackModule } from './snack/snack.module';
import { CinemaModule } from './cinema/cinema.module';
import { TarifListComponent } from './components/tarif-list/tarif-list.component';
import { SiegeModule } from './siege/siege.module';
import { SalleModule } from './salle/salle.module';
import { PanierComponent } from './components/panier/panier.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TarifListComponent,
    DetailFilmComponent,
    FilmDashboardComponent,
    FilmListComponent,
    FilmCardComponent,
    SeanceListComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    SeanceModule,
    SnackModule,
    CinemaModule,
    SiegeModule,
    SalleModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
