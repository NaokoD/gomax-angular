import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SeanceModule } from './seance/seance.module';
import { SnackModule } from './snack/snack.module';
import { CinemaModule } from './cinema/cinema.module';
import { TarifListComponent } from './components/tarif-list/tarif-list.component';
import { SiegeModule } from './siege/siege.module';
import { SalleModule } from './salle/salle.module';
import { FilmModule } from './film/film.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TarifListComponent,
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
    FilmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
