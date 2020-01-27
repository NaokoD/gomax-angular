import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiegeComponent } from './components/siege/siege.component';
import { SiegeRowComponent } from './components/siege-row/siege-row.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [SiegeComponent, SiegeRowComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SiegeRowComponent
  ]
})
export class SiegeModule { }
