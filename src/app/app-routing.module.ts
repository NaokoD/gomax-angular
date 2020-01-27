import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CinemaListComponent } from './cinema/components/cinema-list/cinema-list.component';
import { SiegeRowComponent } from './siege/components/siege-row/siege-row.component';
import { SallePlanComponent } from './salle/components/salle-plan/salle-plan.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'snacks', loadChildren: './snack/snack.module#SnackModule' },
  { path: 'cinema', component: CinemaListComponent },
  { path: 'siege', component: SiegeRowComponent },
  { path: 'plan', component: SallePlanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
