import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { contactsService } from 'src/app/contact.service';
import {DialogModule} from 'primeng/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { classContacts } from 'src/app/Models/classContacts';


@Component({
  selector: 'app-contact-details-pop-up',
  templateUrl: './contact-details-pop-up.component.html',
  styleUrls: ['./contact-details-pop-up.component.css']
})
export class ContactDetailsPopUpComponent implements OnInit {
  public contactForm: FormGroup;
  private contact: classContacts;
  @Input()
  public displayModal:boolean;
  @Output() newContactEvent = new EventEmitter<classContacts>();

  newContact(){
    debugger
    this.contact.ContactFirstName = this.contactForm.controls["ContactFirstName"].value;
    this.contact.ContactLastName= this.contactForm.controls["ContactLastName"].value;
    this.contact.ContactEmail= this.contactForm.controls["ContactEmail"].value;
    this.contact.ContactPhone= this.contactForm.controls["ContactPhone"].value;
    this.contact.ContactAddress= this.contactForm.controls["ContactAddress"].value;
    this.service.putContactInServer(this.contact).subscribe(data=>{
      this.displayModal=false
      debugger
      this.newContactEvent.emit(data);
    }, err => {
      alert("שגיאה! לא נשמר איש קשר ");
    });
    
  }
  close(){
    debugger
    const c=new classContacts();
    c.ContactId=-1;
    this.newContactEvent.emit(c);
  }
  constructor(private _acr:ActivatedRoute, private service: contactsService, private _router: Router) { 
    debugger
  }
  
  ngOnInit(): void {
    debugger
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
          this.contact = new classContacts();
          this.contactForm = new FormGroup({
            ContactLastName: new FormControl("",[Validators.required, Validators.minLength(2)]),
            ContactEmail: new FormControl("",[Validators.required, Validators.minLength(5),Validators.email]),
            ContactFirstName: new FormControl("",[Validators.required, Validators.minLength(2)]),
            ContactPhone: new FormControl("",[Validators.required, Validators.minLength(9)]),
            ContactAddress:new FormControl("",[Validators.minLength(3)])
         })//}
    //     //debugger;
    //    }, err => {
    //      this._booksOrder = null;
    //   })
    // })
  
  }
  
}
