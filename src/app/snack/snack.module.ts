import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnackRoutingModule } from './snack-routing.module';
import { SnackCardComponent } from './components/snack-card/snack-card.component';
import { SnackListComponent } from './components/snack-list/snack-list.component';
import { SnackDashboardComponent } from './components/snack-dashboard/snack-dashboard.component';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
//import { SnackDetailsComponent } from './components/product-details/product-details.component';

@NgModule({
  declarations: [SnackCardComponent, SnackListComponent, SnackDashboardComponent],
  imports: [
    CommonModule,
    SnackRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    SnackDashboardComponent
  ]
})
export class SnackModule { }
