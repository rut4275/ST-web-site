import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksOrdersComponent } from './books-orders/books-orders.component';
import { BooksEditComponent } from './books-edit/books-edit.component';
import { BooksStatisticsComponent } from './books-statistics/books-statistics.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooksNewOrderComponent } from './books-new-order/books-new-order.component';
import { DesignModule } from '../design/design.module'
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ToolbarModule} from 'primeng/toolbar';
@NgModule({
  declarations: [BooksOrdersComponent, BooksEditComponent, BooksStatisticsComponent, BooksNewOrderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DesignModule,
    ButtonModule,
    RippleModule,
    ScrollPanelModule,
    ToolbarModule
  ],
  exports:[BooksOrdersComponent, BooksEditComponent, BooksStatisticsComponent,BooksNewOrderComponent]
})
export class BooksModule { }
