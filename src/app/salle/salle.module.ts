import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalleListComponent } from './components/salle-list/salle-list.component';
import { SallePlanComponent } from './components/salle-plan/salle-plan.component';
import { SiegeModule } from '../siege/siege.module';
import {MaterialModule} from '../material.module';



@NgModule({
  declarations: [SalleListComponent, SallePlanComponent],
  imports: [
    CommonModule,
    SiegeModule
  ],
  exports: [
    SalleListComponent,
    SallePlanComponent
  ]
})
export class SalleModule { }
