import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module'
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login.service';
import { NotFoundPageComponent } from './not-found/not-found-page/not-found-page.component'
import { RouterModule, Routes} from '@angular/router'
import { BooksModule } from './books/books.module';
import { MoviesModule } from './movies/movies.module';
import { booksService } from './books.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DesignModule } from './design/design.module'
import { GroupesModule } from './groupes/groupes.module';
import { moviesService } from './movies.service';
import { filmsService } from './films.service';
import { moviesPeriodService } from './moviesPeriod.service';
import { moviesPaymentService } from './moviesPayment.service';
import { contactsService } from './contact.service';
import {DropdownModule} from 'primeng/dropdown'; 
import { citiesService } from './cities.service';
@NgModule({
  declarations: [
     AppComponent,
     NotFoundPageComponent
    
  ],
  imports: [
    MoviesModule,
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    BooksModule,
    GroupesModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DesignModule,
    DropdownModule,
    CommonModule
  ],
  providers: [LoginService, booksService, moviesService,filmsService,moviesPeriodService, moviesPaymentService,contactsService,citiesService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
