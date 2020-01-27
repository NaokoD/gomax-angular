import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FilmDashboardComponent } from './film/components/film-dashboard/film-dashboard.component';
import { DetailFilmComponent } from './film/components/detail-film/detail-film.component';
import { SeanceListComponent } from './seance/components/seance-list/seance-list.component';






const routes: Routes = [


  { path: '', component: FilmDashboardComponent },
  { path: 'details/:id', component: DetailFilmComponent },
  { path: 'seances', component: SeanceListComponent }
  // path: '', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
