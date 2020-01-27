import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalleListComponent } from './components/salle-list/salle-list.component';
import { SallePlanComponent } from './components/salle-plan/salle-plan.component';
import { SiegeModule } from '../siege/siege.module';
import { MaterialModule } from '../material.module';
import { RowComponent } from './components/row/row.component';



@NgModule({
  declarations: [SalleListComponent, SallePlanComponent, RowComponent],
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
