import { Component, OnInit } from '@angular/core';
import { classBooksOrders } from 'src/app/Models/classBooksOrders';
import {booksService} from 'src/app/books.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-books-orders',
  templateUrl: './books-orders.component.html',
  styleUrls: ['./books-orders.component.css']
})
export class BooksOrdersComponent implements OnInit {
  BooksOrdersList:classBooksOrders[];
  flag1 = -1;
  flag2 = 1;
  x1 = 1;
  x2 = -1;
  constructor(private _booksService :booksService, private _router: Router) {
    _booksService.getAllBooksOrderFromServer().subscribe(data => {
      this.BooksOrdersList = data;
      this.sortListByDate();
    },err =>{
      alert("שגיאה בטעינת טבלת הזמנות ספרים");
    });
   }
   goToEdit(id: number, flag: boolean){
    this._router.navigate(['/editBook',id, flag]);
   }
   newOrder(){
    this._router.navigate(['/booksNewOrder']);
   }
   sortListByDate(){
    var s:classBooksOrders[] = this.BooksOrdersList.sort((n1,n2)=> {
      if (n1.OrderDate>n2.OrderDate){
        return this.flag1;
      }
      if(n1.OrderDate<n2.OrderDate){
        return this.flag2;
      }
      return 0;
    })
    var y = this.flag1;
    this.flag1 = this.flag2;
    this.flag2 = y;
    // var x = this.x1;
    // this.x1 = this.x2;
    // this.x2 = x;
    //console.log("flag1:" + this.flag1)
    //console.log("flag2:" + this.flag2)
    //console.log(s);
  }
  sortListByStatus(){
    var s:classBooksOrders[]  = this.BooksOrdersList.sort((n1,n2)=> {
      if (n1.Paid && !n2.Paid){
        return 1;
      }
      if(!n1.Paid && n2.Paid){
        return -1;
      }
      return 0;
    })
    // var x = this.x1;
    // this.x1 = this.x2;
    // this.x2 = x;
    var y = this.flag1;
    this.flag1 = this.flag2;
    this.flag2 = y;
    //console.log("x1:" + this.x1)
    //console.log("x2:" + this.x2)
    //console.log(s);
  }
  globalSort(prop:string){
    var s:classBooksOrders[] = this.BooksOrdersList.sort((n1,n2)=> {
      if (n1[prop]>n2[prop]){
        return this.flag1;
      }
      if(n1[prop]<n2[prop]){
        return this.flag2;
      }
      return 0;
    })
    var y = this.flag1;
    this.flag1 = this.flag2;
    this.flag2 = y;
  }
  ngOnInit(): void {
    
  }

}
