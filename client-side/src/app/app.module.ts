import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module'
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login.service';
import { NotFoundPageComponent } from './not-found/not-found-page/not-found-page.component'
import { RouterModule, Routes} from '@angular/router'
import { BooksModule } from './books/books.module';
import { booksService } from './books.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DesignModule } from './design/design.module'
import { GroupesModule } from './groupes/groupes.module';
import { moviesService } from './movies.service';
@NgModule({
  declarations: [
     AppComponent,
     NotFoundPageComponent
    
  ],
  imports: [
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
    DesignModule
  ],
  providers: [LoginService, booksService, moviesService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
