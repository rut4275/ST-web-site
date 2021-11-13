import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {GalleriaModule} from 'primeng/galleria';


@NgModule({
  declarations: [ MenuComponent],
  imports: [
    CommonModule,
    GalleriaModule
  ],
  exports: [ MenuComponent ]
})
export class DesignModule { }
