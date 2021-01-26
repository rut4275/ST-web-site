import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactDetailsPopUpComponent } from './contact-details-pop-up/contact-details-pop-up.component';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ContactDetailsPopUpComponent],
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports:[ContactDetailsPopUpComponent]
})
export class ContactsModule { }
