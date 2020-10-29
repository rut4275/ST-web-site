import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';
import {BooksOrdersComponent} from './books/books-orders/books-orders.component';
import { BooksEditComponent } from './books/books-edit/books-edit.component'
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import {GroupesListComponent} from './groupes/groupes-list/groupes-list.component';
import {NotFoundPageComponent} from './not-found/not-found-page/not-found-page.component';
import { LoginUserComponent } from './login/login-user/login-user.component';
import { BooksNewOrderComponent } from './books/books-new-order/books-new-order.component';
import { NevigateComponent } from './nevigate/nevigate/nevigate.component';
import { MenuComponent } from './design/menu/menu.component';


const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "login" },
  { path: "login", component: LoginUserComponent },
  { path: "nevigate", component: NevigateComponent}, 
  { path: "menu", component: MenuComponent}, 
    // children:[{ path: "books", component: BooksOrdersComponent },
    //   { path: "booksNewOrder", component: BooksNewOrderComponent },
    //   { path: "movies", component: MoviesListComponent},
    //   { path: "groups", component: GroupesListComponent },
    //   { path: "editBook/:id/:flag", component: BooksEditComponent },
    //   { path: "**", component: NotFoundPageComponent}]},
  { path: "books", component: BooksOrdersComponent },
  { path: "booksNewOrder", component: BooksNewOrderComponent },
  { path: "movies", component: MoviesListComponent},
  { path: "groups", component: GroupesListComponent },
  { path: "editBook/:id/:flag", component: BooksEditComponent },
  { path: "**", component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),LoginModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
