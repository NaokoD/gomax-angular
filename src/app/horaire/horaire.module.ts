import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoraireRoutingModule } from './horaire-routing.module';
import { HoraireCardComponent } from './components/horaire-card/horaire-card.component';
import { HoraireListComponent } from './components/horaire-list/horaire-list.component';
import { HoraireDashboardComponent } from './components/horaire-dashboard/horaire-dashboard.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [HoraireCardComponent, HoraireListComponent, HoraireDashboardComponent],
  imports: [
    CommonModule,
    HoraireRoutingModule,
    MaterialModule
  ],
  exports: [
    HoraireListComponent,
    HoraireCardComponent,
    HoraireDashboardComponent
  ],
})
export class HoraireModule { }
