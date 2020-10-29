import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { classBooksOrders } from 'src/app/Models/classBooksOrders';
import { FormGroup, FormControl, Validators, FormArray, AbstractControl } from '@angular/forms';
import { classBooksOrderItem } from 'src/app/Models/classBooksOrderItem';
import { ActivatedRoute, Router } from '@angular/router';
import { booksService } from 'src/app/books.service';
import { classBooksCustomers } from 'src/app/Models/classBooksCustomers';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-books-edit',
  templateUrl: './books-edit.component.html',
  styleUrls: ['./books-edit.component.css']
})

export class BooksEditComponent implements OnInit {

  booksOrderItemList: classBooksOrderItem[];

  public _booksOrder: classBooksOrders;
  public _bookCustomer: classBooksCustomers;
  public items: MenuItem[];
  public activeIndex: number = 1;

  @Input()
  flag: boolean;

  BooksOrderForm: FormGroup

  @Output()
  onSaveOrder: EventEmitter<classBooksOrders> = new EventEmitter();
  
  @Output()
  onUpdateOrder: EventEmitter<classBooksOrders> = new EventEmitter();

  saveNewBooksOrder() {
    // לעשות ולידציות
    this._booksOrder.CustomerId = this.BooksOrderForm.controls["CustomerId"].value;
    this._booksOrder.OrderDate = this.BooksOrderForm.controls["OrderDate"].value;
    this._booksOrder.AcceptLiscence = this.BooksOrderForm.controls["AcceptLiscence"].value;
    this._booksOrder.WithReceipt = this.BooksOrderForm.controls["WithReceipt"].value;
    this._booksOrder.Note = this.BooksOrderForm.controls["Note"].value;
    this._booksOrder.TotalPrice = this.BooksOrderForm.controls["TotalPrice"].value;
    this._booksOrder.Paid = this.BooksOrderForm.controls["Paid"].value;
    this._booksOrder.Supplied = this.BooksOrderForm.controls["Supplied"].value;
    this._booksOrder.Customer.CustomerName = this.BooksOrderForm.controls["CustomerName"].value;
    this._booksOrder.Customer.CustomerAddress = this.BooksOrderForm.controls["CustomerAddress"].value;
    this._booksOrder.Customer.CustomerCategoryId = this.BooksOrderForm.controls["CustomerCategoryId"].value;
    this._booksOrder.Customer.CustomerCategory.CategoryName = this.BooksOrderForm.controls["CustomerCategorymerName"].value;
    this._booksOrder.Customer.ContactId = this.BooksOrderForm.controls["ContactId"].value;
    this._booksOrder.Customer.Contact.ContactFirstName = this.BooksOrderForm.controls["ContactFirstName"].value;
    this._booksOrder.Customer.Contact.ContactLastName = this.BooksOrderForm.controls["ContactLastName"].value;
    this._booksOrder.Customer.Contact.ContactEmail = this.BooksOrderForm.controls["ContactEmail"].value;
    this._booksOrder.Customer.Contact.ContactPhone = this.BooksOrderForm.controls["ContactPhone"].value;
    this._booksOrder.Customer.Contact.ContactAddress = this.BooksOrderForm.controls["ContactAddress"].value;
    this._booksOrder.BooksOrderItem = this.BooksOrderForm.controls["BooksOrderItem"].value;
    this.service.putOrderInServer(this._booksOrder).subscribe(data=>{
      this._router.navigate(["/books"]);
    })
    err => {
      this._booksOrder = null;
    };
}
    
updateBooksOrder() {
  this._booksOrder.CustomerId = this.BooksOrderForm.controls["CustomerId"].value;
  this._booksOrder.OrderDate = this.BooksOrderForm.controls["OrderDate"].value;
  this._booksOrder.AcceptLiscence = this.BooksOrderForm.controls["AcceptLiscence"].value;
  this._booksOrder.WithReceipt = this.BooksOrderForm.controls["WithReceipt"].value;
  this._booksOrder.Note = this.BooksOrderForm.controls["Note"].value;
  this._booksOrder.TotalPrice = this.BooksOrderForm.controls["TotalPrice"].value;
  this._booksOrder.Paid = this.BooksOrderForm.controls["Paid"].value;
  this._booksOrder.Supplied = this.BooksOrderForm.controls["Supplied"].value;
  this._booksOrder.Customer.CustomerName = this.BooksOrderForm.controls["CustomerName"].value;
  this._booksOrder.Customer.CustomerAddress = this.BooksOrderForm.controls["CustomerAddress"].value;
  this._booksOrder.Customer.CustomerCategoryId = this.BooksOrderForm.controls["CustomerCategoryId"].value;
  this._booksOrder.Customer.CustomerCategory.CategoryName = this.BooksOrderForm.controls["CustomerCategorymerName"].value;
  this._booksOrder.Customer.ContactId = this.BooksOrderForm.controls["ContactId"].value;
  this._booksOrder.Customer.Contact.ContactFirstName = this.BooksOrderForm.controls["ContactFirstName"].value;
  this._booksOrder.Customer.Contact.ContactLastName = this.BooksOrderForm.controls["ContactLastName"].value;
  this._booksOrder.Customer.Contact.ContactEmail = this.BooksOrderForm.controls["ContactEmail"].value;
  this._booksOrder.Customer.Contact.ContactPhone = this.BooksOrderForm.controls["ContactPhone"].value;
  this._booksOrder.Customer.Contact.ContactAddress = this.BooksOrderForm.controls["ContactAddress"].value;
  this._booksOrder.BooksOrderItem = this.BooksOrderForm.controls["BooksOrderItem"].value;
  this.service.updateOrderInServer(this._booksOrder).subscribe(data=>{
    this._router.navigate(["/books"]);
    alert("ההזמנה עודכנה בהצלחה")
  })
  err => {
    this._booksOrder = null;
    alert("שגיאה בעדכון הפרטים, ההזמנה לא עודכנה")
  };
}
flag1 = true;
flag2 = false;
flag3 = false;
flag4 = false;
next2(){
  this.flag1 = false;
  this.flag2 = true;
}
next3(){
  this.flag2 = false;
  this.flag3=true;
}
next4(){
  this.flag3 = false;
  this.flag4=true;
}
back1(){
  this.flag2 = false;
  this.flag1 = true;
}
back2(){
  this.flag3 = false;
  this.flag2 = true;
}
back3(){
  this.flag4 = false;
  this.flag3 = true;
}
  constructor(private _acr:ActivatedRoute, private service: booksService, private _router: Router) { }
  currentDate;
  ngOnInit(): void {
    this._acr.paramMap.subscribe(params => {
      let bookOrderId = +params.get("id");
      this.flag = Boolean(+params.get("flag"));
      this.service.getAllBooksOrderFromServer().subscribe(data => {
        if (bookOrderId != 0) {
          let filterData = data.filter(x => x.BooksOrdersId == bookOrderId);
          this._booksOrder = filterData[0];
          this.BooksOrderForm = new FormGroup({
            CustomerId: new FormControl(this._booksOrder.CustomerId),
            OrderDate: new FormControl(new Date(this._booksOrder.OrderDate).toISOString().substring(0, 10)),
            AcceptLiscence: new FormControl(this._booksOrder.AcceptLiscence),
            WithReceipt: new FormControl(this._booksOrder.WithReceipt),
            Note: new FormControl(this._booksOrder.Note),
            TotalPrice: new FormControl(this._booksOrder.TotalPrice),
            Paid: new FormControl(this._booksOrder.Paid),
            Supplied: new FormControl(this._booksOrder.Supplied),
            CustomerName: new FormControl(this._booksOrder.Customer.CustomerName), 
            CustomerAddress: new FormControl(this._booksOrder.Customer.CustomerAddress), 
            CustomerCategoryId: new FormControl(this._booksOrder.Customer.CustomerCategoryId),
            CustomerCategorymerName: new FormControl(this._booksOrder.Customer.CustomerCategory.CategoryName),  
            ContactId: new FormControl(this._booksOrder.Customer.ContactId), 
            ContactFirstName: new FormControl(this._booksOrder.Customer.Contact.ContactFirstName), 
            ContactLastName: new FormControl(this._booksOrder.Customer.Contact.ContactLastName), 
            ContactEmail: new FormControl(this._booksOrder.Customer.Contact.ContactEmail), 
            ContactPhone: new FormControl(this._booksOrder.Customer.Contact.ContactPhone), 
            ContactAddress: new FormControl(this._booksOrder.Customer.Contact.ContactAddress), 
            BooksOrderItem: new FormControl(this._booksOrder.BooksOrderItem),
          });}
        else{
          debugger;
          this._booksOrder = new classBooksOrders();
          this.BooksOrderForm = new FormGroup({
            CustomerId: new FormControl(""),
            OrderDate: new FormControl(""),
            AcceptLiscence: new FormControl(""),
            WithReceipt: new FormControl(""),
            Note: new FormControl(""),
            TotalPrice: new FormControl(""),
            Paid: new FormControl(""),
            Supplied: new FormControl(""),
            CustomerName: new FormControl(""),
            CustomerAddress: new FormControl(""),
            CustomerCategoryId: new FormControl(""),
            CustomerCategorymerName: new FormControl(""),
            ContactId: new FormControl(""),
            ContactFirstName: new FormControl(""),
            ContactLastName: new FormControl(""),
            ContactEmail: new FormControl(""),
            ContactPhone: new FormControl(""),
            ContactAddress: new FormControl(""),
            BooksOrderItem: new FormControl(""),
        })}
        //debugger;
       }, err => {
         this._booksOrder = null;
      })
    })
  }

}

