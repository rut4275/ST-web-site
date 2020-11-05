import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { contactsService } from 'src/app/contact.service';

@Component({
  selector: 'app-contact-details-pop-up',
  templateUrl: './contact-details-pop-up.component.html',
  styleUrls: ['./contact-details-pop-up.component.css']
})
export class ContactDetailsPopUpComponent implements OnInit {

  constructor(private _acr:ActivatedRoute, private service: contactsService, private _router: Router) { }
  currentDate;
  ngOnInit(): void {
    // this._acr.paramMap.subscribe(params => {
    //   let bookOrderId = +params.get("id");
    //   this.flag = Boolean(+params.get("flag"));
    //   this.service.getAllBooksOrderFromServer().subscribe(data => {
    //     if (bookOrderId != 0) {
    //       let filterData = data.filter(x => x.BooksOrdersId == bookOrderId);
    //       this._booksOrder = filterData[0];
    //       this.BooksOrderForm = new FormGroup({
    //         CustomerId: new FormControl(this._booksOrder.CustomerId),
    //         OrderDate: new FormControl(new Date(this._booksOrder.OrderDate).toISOString().substring(0, 10)),
    //         AcceptLiscence: new FormControl(this._booksOrder.AcceptLiscence),
    //         WithReceipt: new FormControl(this._booksOrder.WithReceipt),
    //         Note: new FormControl(this._booksOrder.Note),
    //         TotalPrice: new FormControl(this._booksOrder.TotalPrice),
    //         Paid: new FormControl(this._booksOrder.Paid),
    //         Supplied: new FormControl(this._booksOrder.Supplied),
    //         CustomerName: new FormControl(this._booksOrder.Customer.CustomerName), 
    //         CustomerAddress: new FormControl(this._booksOrder.Customer.CustomerAddress), 
    //         CustomerCategoryId: new FormControl(this._booksOrder.Customer.CustomerCategoryId),
    //         CustomerCategorymerName: new FormControl(this._booksOrder.Customer.CustomerCategory.CategoryName),  
    //         ContactId: new FormControl(this._booksOrder.Customer.ContactId), 
    //         ContactFirstName: new FormControl(this._booksOrder.Customer.Contact.ContactFirstName), 
    //         ContactLastName: new FormControl(this._booksOrder.Customer.Contact.ContactLastName), 
    //         ContactEmail: new FormControl(this._booksOrder.Customer.Contact.ContactEmail), 
    //         ContactPhone: new FormControl(this._booksOrder.Customer.Contact.ContactPhone), 
    //         ContactAddress: new FormControl(this._booksOrder.Customer.Contact.ContactAddress), 
    //         BooksOrderItem: new FormControl(this._booksOrder.BooksOrderItem),
    //       });}
    //     else{
    //       debugger;
    //       this._booksOrder = new classBooksOrders();
    //       this.BooksOrderForm = new FormGroup({
    //         CustomerId: new FormControl(""),
    //         OrderDate: new FormControl(""),
    //         AcceptLiscence: new FormControl(""),
    //         WithReceipt: new FormControl(""),
    //         Note: new FormControl(""),
    //         TotalPrice: new FormControl(""),
    //         Paid: new FormControl(""),
    //         Supplied: new FormControl(""),
    //         CustomerName: new FormControl(""),
    //         CustomerAddress: new FormControl(""),
    //         CustomerCategoryId: new FormControl(""),
    //         CustomerCategorymerName: new FormControl(""),
    //         ContactId: new FormControl(""),
    //         ContactFirstName: new FormControl(""),
    //         ContactLastName: new FormControl(""),
    //         ContactEmail: new FormControl(""),
    //         ContactPhone: new FormControl(""),
    //         ContactAddress: new FormControl(""),
    //         BooksOrderItem: new FormControl(""),
    //     })}
    //     //debugger;
    //    }, err => {
    //      this._booksOrder = null;
    //   })
    // })
  }


}
