import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinemaListComponent } from './components/cinema-list/cinema-list.component';
import { CinemaDetailsComponent } from './components/cinema-details/cinema-details.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [CinemaListComponent, CinemaDetailsComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CinemaListComponent
  ]
})
export class CinemaModule { }
