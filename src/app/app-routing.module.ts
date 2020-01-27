import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FilmDashboardComponent } from './film/components/film-dashboard/film-dashboard.component';
import { DetailFilmComponent } from './film/components/detail-film/detail-film.component';
import { SeanceListComponent } from './seance/components/seance-list/seance-list.component';
import { CinemaListComponent } from './cinema/components/cinema-list/cinema-list.component';
import { SiegeRowComponent } from './siege/components/siege-row/siege-row.component';
import { SallePlanComponent } from './salle/components/salle-plan/salle-plan.component';






const routes: Routes = [


  { path: '', component: FilmDashboardComponent },
  { path: 'details/:id', component: DetailFilmComponent },
  { path: 'seances', component: SeanceListComponent },
  // path: '', component: HomeComponent },


  { path: 'cinema', component: CinemaListComponent },
  { path: 'siege', component: SiegeRowComponent },
  { path: 'plan', component: SallePlanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
