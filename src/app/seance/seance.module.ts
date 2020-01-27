import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeanceRoutingModule } from './seance-routing.module';
import { SeanceListComponent } from './components/seance-list/seance-list.component';


@NgModule({
  declarations: [SeanceListComponent],
  imports: [
    CommonModule,
    SeanceRoutingModule
  ],
  exports: [
    SeanceListComponent
  ]
})
export class SeanceModule { }
