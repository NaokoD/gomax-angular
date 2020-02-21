import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FilmDashboardComponent } from './film/components/film-dashboard/film-dashboard.component';
import { DetailFilmComponent } from './film/components/detail-film/detail-film.component';
import { SeanceListComponent } from './seance/components/seance-list/seance-list.component';
import { CinemaListComponent } from './cinema/components/cinema-list/cinema-list.component';
import { TarifListComponent } from './components/tarif-list/tarif-list.component';
import { RowComponent } from './salle/components/row/row.component';
import { SallePlanComponent } from './salle/components/salle-plan/salle-plan.component';
import { FilmSummaryComponent } from './film/components/film-summary/film-summary.component';

import { CommandeSummaryComponent } from './components/commande-summary/commande-summary.component';
import { HoraireListComponent } from './horaire/components/horaire-list/horaire-list.component';
import { HoraireCardComponent } from './horaire/components/horaire-card/horaire-card.component';
import { FilmFormComponent } from './film/components/film-form/film-form.component';
import { SeanceDashboardComponent } from './seance/components/seance-dashboard/seance-dashboard.component';



const routes: Routes = [
  { path: '', component: FilmDashboardComponent },
  { path: 'details/:id', component: DetailFilmComponent },
  { path: 'details/:id/plan/:idSeance', component: SallePlanComponent },
  { path: 'details/:id/tarif', component: TarifListComponent },
  { path: 'seances', component: SeanceListComponent },
  // path: '', component: HomeComponent },
  { path: 'snacks', loadChildren: './snack/snack.module#SnackModule' },
  { path: 'cinema', component: CinemaListComponent },
  { path: 'siege', component: RowComponent },
  { path: 'plan', component: SallePlanComponent },
  { path: 'cinema', component: CinemaListComponent },
  { path: 'tarif', component: TarifListComponent },
  { path: 'summary/:id', component: FilmSummaryComponent },
  { path: 'summary', component: CommandeSummaryComponent },
  { path: 'horaires', component: HoraireListComponent },
  { path: 'seances/films/:id', component: SeanceListComponent },
  { path: 'film-form', component: FilmFormComponent },
  { path: 'seances', component: SeanceDashboardComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
