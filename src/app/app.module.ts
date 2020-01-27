import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SnackModule } from './snack/snack.module';
import { CinemaModule } from './cinema/cinema.module';
import { SiegeModule } from './siege/siege.module';
import { SalleModule } from './salle/salle.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    SnackModule,
    CinemaModule,
    SiegeModule,
    SalleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
