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



const routes: Routes = [
  { path: '', component: FilmDashboardComponent },
  { path: 'details/:id', component: DetailFilmComponent },
  { path: 'details/:id/plan/:id', component: SallePlanComponent },
  { path: 'seances', component: SeanceListComponent },
  // path: '', component: HomeComponent },
  { path: 'snacks', loadChildren: './snack/snack.module#SnackModule' },
  { path: 'cinema', component: CinemaListComponent },
  { path: 'siege', component: RowComponent },
  { path: 'plan', component: SallePlanComponent },
  { path: 'cinema', component: CinemaListComponent },
  { path: 'tarif', component: TarifListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
