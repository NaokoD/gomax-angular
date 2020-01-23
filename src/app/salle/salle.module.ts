import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalleListComponent } from './components/salle-list/salle-list.component';
import { SallePlanComponent } from './components/salle-plan/salle-plan.component';



@NgModule({
  declarations: [SalleListComponent, SallePlanComponent],
  imports: [
    CommonModule
  ]
})
export class SalleModule { }
