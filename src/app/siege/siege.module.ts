import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiegeRowComponent } from './components/siege-row/siege-row.component';
import { SiegeComponent } from './components/siege/siege.component';



@NgModule({
  declarations: [SiegeRowComponent, SiegeComponent],
  imports: [
    CommonModule
  ]
})
export class SiegeModule { }
