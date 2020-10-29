import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NevigateComponent } from './nevigate/nevigate.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NevigateComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[NevigateComponent]
})
export class NevigateModule { }
