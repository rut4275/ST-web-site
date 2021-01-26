import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { contactsService } from 'src/app/contact.service';
import { filmsService } from 'src/app/films.service';
import { classContacts } from 'src/app/Models/classContacts';
import { classFilms } from 'src/app/Models/classFilms';
import { classMovieClose } from 'src/app/Models/classMovieClose';
import { classMoviePayment } from 'src/app/Models/classMoviePayment';
import { classMoviePeriod } from 'src/app/Models/classMoviePeriod';
import { moviesService } from 'src/app/movies.service';
import { moviesPaymentService } from 'src/app/moviesPayment.service';
import { moviesPeriodService } from 'src/app/moviesPeriod.service';
import {SelectItem} from 'primeng/api';
import {SelectItemGroup} from 'primeng/api';

@Component({
  selector: 'app-close-movie',
  templateUrl: './close-movie.component.html',
  styleUrls: ['./close-movie.component.css']
})
export class CloseMovieComponent implements OnInit {


  _contact:classContacts[];
  public _closeMovie:classMovieClose;
  public films:classFilms[];
  public contacts:SelectItem[];
  public payments:classMoviePayment[];
  public periods:SelectItem[];
  public closeMovieForm: FormGroup;
  public flag:boolean;
  public displayModal:boolean=false;
  public status:number=1;
  public _newInCharge: boolean=false;
  public _newOrder: boolean=false;
  public _newContact: boolean=false;

  createArray(contact:classContacts[]){
    this.contacts=[];
    const c=new classContacts()
    c.ContactId=-1;
    this.contacts.push({label:"חדש",value:c})

    for (let i = 0; i < contact.length; i++) {
      debugger
      console.log(i+" "+contact[i]);
      this.contacts.push({label: contact[i].ContactFirstName+" "+contact[i].ContactLastName, value:
      {ContactId:contact[i].ContactId,
        ContactFirstName:contact[i].ContactFirstName,
        ContactLastName:contact[i].ContactLastName,
        ContactPhone:contact[i].ContactPhone,
        ContactEmail:contact[i].ContactEmail,
        ContactAddress:contact[i].ContactAddress} });
  }
  console.log(this.contacts);
  }
  createPeriods(period:classMoviePeriod[]){
    this.periods=[];
    for (let i = 0; i < period.length; i++) {
      debugger
      this.periods.push({label: period[i].PeriodName, value:period[i].PeriodId} );
    }
  }
  newContact(contact:classContacts){
    this.displayModal=false;
    debugger
    this.loadContact();

     if(this._newInCharge){
      this._newInCharge=false;
      if(contact.ContactId==-1){
        this.closeMovieForm.controls["InCharge"].setValue("");
        return;
        }
      this.closeMovieForm.controls["InCharge"].setValue( {ContactId:contact.ContactId,
        ContactFirstName:contact.ContactFirstName,
        ContactLastName:contact.ContactLastName,
        ContactPhone:contact.ContactPhone,
        ContactEmail:contact.ContactEmail,
        ContactAddress:contact.ContactAddress} );
        this.updateInCharge()
     }
     if(this._newContact){
      this._newContact=false;
      if(contact.ContactId==-1){
        this.closeMovieForm.controls["Contact"].setValue("");
        return;
        }
      this.closeMovieForm.controls["Contact"].setValue( {ContactId:contact.ContactId,
        ContactFirstName:contact.ContactFirstName,
        ContactLastName:contact.ContactLastName,
        ContactPhone:contact.ContactPhone,
        ContactEmail:contact.ContactEmail,
        ContactAddress:contact.ContactAddress} );
        this.updateContact()
     }
     if(this._newOrder){
      this._newOrder=false;
      if(contact.ContactId==-1){
        this.closeMovieForm.controls["Order"].setValue("");
        return;
        }
      this.closeMovieForm.controls["Order"].setValue( {ContactId:contact.ContactId,
        ContactFirstName:contact.ContactFirstName,
        ContactLastName:contact.ContactLastName,
        ContactPhone:contact.ContactPhone,
        ContactEmail:contact.ContactEmail,
        ContactAddress:contact.ContactAddress} );
        this.updateOrder()
     }
  }
 
  updateOrder(){
    if(this.closeMovieForm.controls["Order"].value.ContactId == -1){
      this.displayModal=true;
      this._newOrder=true
    }
    else{
       const order=this.closeMovieForm.controls["Order"].value;
     this.closeMovieForm.controls["OrderFirstName"].setValue(order.ContactFirstName);
     this.closeMovieForm.controls["OrderLastName"].setValue(order.ContactLastName);
     this.closeMovieForm.controls["OrderEmail"].setValue(order.ContactEmail);
     this.closeMovieForm.controls["OrderPhone"].setValue(order.ContactPhone);
     this.closeMovieForm.controls["OrderAddress"].setValue(order.ContactAddress);
    }
    
  }
  updateInCharge(){
    if(this.closeMovieForm.controls["InCharge"].value.ContactId == -1){
      this.displayModal=true;
      this._newInCharge=true;
    }
    else{
      const inCharge=this.closeMovieForm.controls["InCharge"].value;
    this.closeMovieForm.controls["InChargeFirstName"].setValue(inCharge.ContactFirstName);
    this.closeMovieForm.controls["InChargeLastName"].setValue(inCharge.ContactLastName);
    this.closeMovieForm.controls["InChargeEmail"].setValue(inCharge.ContactEmail);
    this.closeMovieForm.controls["InChargePhone"].setValue(inCharge.ContactPhone);
    this.closeMovieForm.controls["InChargeAddress"].setValue(inCharge.ContactAddress);
    }
    
  }
  updateContact(){
    if(this.closeMovieForm.controls["Contact"].value.ContactId == -1){
      this.displayModal=true;
      this._newContact=true
    }
    else{
    const contact=this.closeMovieForm.controls["Contact"].value;
    this.closeMovieForm.controls["ContactFirstName"].setValue(contact.ContactFirstName);
    this.closeMovieForm.controls["ContactLastName"].setValue(contact.ContactLastName);
    this.closeMovieForm.controls["ContactEmail"].setValue(contact.ContactEmail);
    this.closeMovieForm.controls["ContactPhone"].setValue(contact.ContactPhone);
    this.closeMovieForm.controls["ContactAddress"].setValue(contact.ContactAddress);
    }
  }
  updateCloseMovie(){
    this._closeMovie.Contact=this.closeMovieForm.controls["Contact"].value;//פרוט
    this._closeMovie.Contact.ContactFirstName=this.closeMovieForm.controls["ContactFirstName"].value;
    this._closeMovie.Contact.ContactLastName=this.closeMovieForm.controls["ContactLastName"].value;
    this._closeMovie.Contact.ContactPhone=this.closeMovieForm.controls["ContactPhone"].value;
    this._closeMovie.Contact.ContactEmail=this.closeMovieForm.controls["ContactEmail"].value;
    this._closeMovie.Contact.ContactAddress=this.closeMovieForm.controls["ContactAddress"].value;

    this._closeMovie.InCharge=this.closeMovieForm.controls["InCharge"].value;//פרוט
    this._closeMovie.InCharge.ContactFirstName=this.closeMovieForm.controls["InChargeFirstName"].value;
    this._closeMovie.InCharge.ContactLastName=this.closeMovieForm.controls["InChargeLastName"].value;
    this._closeMovie.InCharge.ContactPhone=this.closeMovieForm.controls["InChargePhone"].value;
    this._closeMovie.InCharge.ContactEmail=this.closeMovieForm.controls["InChargeEmail"].value;
    this._closeMovie.InCharge.ContactAddress=this.closeMovieForm.controls["InChargeAddress"].value;

    this._closeMovie.Order=this.closeMovieForm.controls["Order"].value;//פרוט
    this._closeMovie.Order.ContactFirstName=this.closeMovieForm.controls["OrderFirstName"].value;
    this._closeMovie.Order.ContactLastName=this.closeMovieForm.controls["OrderLastName"].value;
    this._closeMovie.Order.ContactPhone=this.closeMovieForm.controls["OrderPhone"].value;
    this._closeMovie.Order.ContactEmail=this.closeMovieForm.controls["OrderEmail"].value;
    this._closeMovie.Order.ContactAddress=this.closeMovieForm.controls["OrderAddress"].value;

    this._closeMovie.ContactId=this.closeMovieForm.controls["Contact"].value.ContactId;
    this._closeMovie.Film=this.closeMovieForm.controls["Film"].value;
    this._closeMovie.FilmId=this.closeMovieForm.controls["Film"].value.FilmId;
    this._closeMovie.GlobalMovie=this.closeMovieForm.controls["GlobalMovie"].value;
    this._closeMovie.InChargeAmount=this.closeMovieForm.controls["InChargeAmount"].value;
    this._closeMovie.InChargeId=this.closeMovieForm.controls["InCharge"].value.ContactId;
    this._closeMovie.MovieAddress=this.closeMovieForm.controls["MovieAddress"].value;
    this._closeMovie.MovieDate=this.closeMovieForm.controls["MovieDate"].value;
    this._closeMovie.OrderId=this.closeMovieForm.controls["Order"].value.ContactId;
    this._closeMovie.Paid=this.closeMovieForm.controls["Paid"].value;
    this._closeMovie.Payment=this.closeMovieForm.controls["Payment"].value;
    this._closeMovie.PaymentId=this.closeMovieForm.controls["Payment"].value.PaymentId;
    this._closeMovie.PeriodId=this.closeMovieForm.controls["PeriodId"].value;
    this._closeMovie.PricePerHead=this.closeMovieForm.controls["PricePerHead"].value;
    this._closeMovie.TotalAmount=this.closeMovieForm.controls["TotalAmount"].value;
    this._closeMovie.TotalParticipants=this.closeMovieForm.controls["TotalParticipants"].value;
    this._closeMovie.WithReceipt=this.closeMovieForm.controls["WithReceipt"].value;

    this._moviesService.updateCloseMovieInServer(this._closeMovie).subscribe(data=>{
      this._router.navigate(["/movies/0"]);
      alert("ההזמנה עודכנה בהצלחה")
    },
    err => {
      alert("שגיאה בעדכון הפרטים, ההזמנה לא עודכנה")
      this.status=1
    });
  }
  newCloseMovie(){
    this._closeMovie.Contact=this.closeMovieForm.controls["Contact"].value;//פרוט
    this._closeMovie.Contact.ContactFirstName=this.closeMovieForm.controls["ContactFirstName"].value;
    this._closeMovie.Contact.ContactLastName=this.closeMovieForm.controls["ContactLastName"].value;
    this._closeMovie.Contact.ContactPhone=this.closeMovieForm.controls["ContactPhone"].value;
    this._closeMovie.Contact.ContactEmail=this.closeMovieForm.controls["ContactEmail"].value;
    this._closeMovie.Contact.ContactAddress=this.closeMovieForm.controls["ContactAddress"].value;

    this._closeMovie.InCharge=this.closeMovieForm.controls["InCharge"].value;//פרוט
    this._closeMovie.InCharge.ContactFirstName=this.closeMovieForm.controls["InChargeFirstName"].value;
    this._closeMovie.InCharge.ContactLastName=this.closeMovieForm.controls["InChargeLastName"].value;
    this._closeMovie.InCharge.ContactPhone=this.closeMovieForm.controls["InChargePhone"].value;
    this._closeMovie.InCharge.ContactEmail=this.closeMovieForm.controls["InChargeEmail"].value;
    this._closeMovie.InCharge.ContactAddress=this.closeMovieForm.controls["InChargeAddress"].value;

    this._closeMovie.Order=this.closeMovieForm.controls["Order"].value;//פרוט
    this._closeMovie.Order.ContactFirstName=this.closeMovieForm.controls["OrderFirstName"].value;
    this._closeMovie.Order.ContactLastName=this.closeMovieForm.controls["OrderLastName"].value;
    this._closeMovie.Order.ContactPhone=this.closeMovieForm.controls["OrderPhone"].value;
    this._closeMovie.Order.ContactEmail=this.closeMovieForm.controls["OrderEmail"].value;
    this._closeMovie.Order.ContactAddress=this.closeMovieForm.controls["OrderAddress"].value;

    this._closeMovie.ContactId=this.closeMovieForm.controls["Contact"].value.ContactId;
    this._closeMovie.Film=this.closeMovieForm.controls["Film"].value;
    this._closeMovie.FilmId=this.closeMovieForm.controls["Film"].value.FilmId;
    this._closeMovie.GlobalMovie=this.closeMovieForm.controls["GlobalMovie"].value;
    this._closeMovie.InChargeAmount=this.closeMovieForm.controls["InChargeAmount"].value;
    this._closeMovie.InChargeId=this.closeMovieForm.controls["InCharge"].value.ContactId;
    this._closeMovie.MovieAddress=this.closeMovieForm.controls["MovieAddress"].value;
    this._closeMovie.MovieDate=this.closeMovieForm.controls["MovieDate"].value;
    this._closeMovie.OrderId=this.closeMovieForm.controls["Order"].value.ContactId;
    this._closeMovie.Paid=this.closeMovieForm.controls["Paid"].value;
    this._closeMovie.Payment=this.closeMovieForm.controls["Payment"].value;
    this._closeMovie.PaymentId=this.closeMovieForm.controls["Payment"].value.PaymentId;
    this._closeMovie.PeriodId=this.closeMovieForm.controls["PeriodId"].value;
    this._closeMovie.PricePerHead=this.closeMovieForm.controls["PricePerHead"].value;
    this._closeMovie.TotalAmount=this.closeMovieForm.controls["TotalAmount"].value;
    this._closeMovie.TotalParticipants=this.closeMovieForm.controls["TotalParticipants"].value;
    this._closeMovie.WithReceipt=this.closeMovieForm.controls["WithReceipt"].value;

    this._moviesService.newMovieCloseToServer(this._closeMovie).subscribe(data=>{
      this._router.navigate(["/movies/0"]);
      alert("ההזמנה נשמרה בהצלחה")
    },
    err => {
      alert("שגיאה בעדכון הפרטים, ההזמנה לא נשמרה")
      this.status=1
    });
  }
  
  loadContact(){
     //טעינת אנשי קשר
    this._contactsService.getAllContacts().subscribe(data => {
      this.createArray(data);
      console.log(this.contacts);
    },err =>{
      alert("שגיאה בטעינת אנשי קשר");
    });
  }
  constructor(private _acr:ActivatedRoute,private _moviesService :moviesService, private _router: Router
    ,private _periodService:moviesPeriodService ,private _paymentService:moviesPaymentService
    ,private _contactsService:contactsService ,private _filmsService:filmsService) { 
   this.loadContact();
    }

  ngOnInit(): void {
    this._acr.paramMap.subscribe(params => {
      let closeMovieId = +params.get("id");
      this.flag = Boolean(+params.get("flag"));
      // debugger;
      this._moviesService.getCloseMovieFromServer(closeMovieId).subscribe(data => {
        if (closeMovieId != 0) {
          this._closeMovie = data;
          this.closeMovieForm = new FormGroup({
            Film: new FormControl(this._closeMovie.Film,[Validators.required]),
            GlobalMovie: new FormControl(this._closeMovie.GlobalMovie,[Validators.required]),
            PricePerHead: new FormControl(this._closeMovie.PricePerHead,[Validators.required]),
            WithReceipt: new FormControl(this._closeMovie.WithReceipt,[Validators.required]),
            TotalParticipants: new FormControl(this._closeMovie.TotalParticipants,[Validators.required]),
            InChargeAmount:new FormControl(this._closeMovie.InChargeAmount,[Validators.required]),
            Order: new FormControl(this._closeMovie.Order,[Validators.required]),
            Contact: new FormControl(this._closeMovie.Contact,[Validators.required]),
            InCharge: new FormControl(this._closeMovie.InCharge,[Validators.required]),
            PeriodId: new FormControl(this._closeMovie.PeriodId,[Validators.required]),
            Payment: new FormControl(this._closeMovie.Payment,[Validators.required]),
            Paid: new FormControl(this._closeMovie.Paid,[Validators.required]),
            TotalAmount: new FormControl(this._closeMovie.TotalAmount,[Validators.required]),
            MovieDate: new FormControl(new Date(this._closeMovie.MovieDate).toLocaleDateString('pt-br').split( '/' ).reverse( ).join( '-' ).substring(0, 10),[Validators.required]),
            MovieAddress: new FormControl(this._closeMovie.MovieAddress,[Validators.required]),
            ContactFirstName: new FormControl(this._closeMovie.Contact.ContactFirstName,[Validators.required]),
            ContactLastName: new FormControl(this._closeMovie.Contact.ContactLastName,[Validators.required]),
            ContactEmail: new FormControl(this._closeMovie.Contact.ContactEmail,[Validators.required]),
            ContactPhone: new FormControl(this._closeMovie.Contact.ContactPhone,[Validators.required]),
            ContactAddress: new FormControl(this._closeMovie.Contact.ContactAddress),
            InChargeFirstName: new FormControl(this._closeMovie.InCharge.ContactFirstName,[Validators.required]),
            InChargeLastName: new FormControl(this._closeMovie.InCharge.ContactLastName,[Validators.required]),
            InChargeEmail: new FormControl(this._closeMovie.InCharge.ContactEmail,[Validators.required]),
            InChargePhone: new FormControl(this._closeMovie.InCharge.ContactPhone,[Validators.required]),
            InChargeAddress: new FormControl(this._closeMovie.InCharge.ContactAddress,[Validators.required]),
            OrderFirstName: new FormControl(this._closeMovie.Order.ContactFirstName,[Validators.required]),
            OrderLastName: new FormControl(this._closeMovie.Order.ContactLastName,[Validators.required]),
            OrderEmail: new FormControl(this._closeMovie.Order.ContactEmail,[Validators.required]),
            OrderPhone: new FormControl(this._closeMovie.Order.ContactPhone,[Validators.required]),
            OrderAddress: new FormControl(this._closeMovie.Order.ContactAddress,[Validators.required])
          });}
        else{
          // debugger;
          this._closeMovie = new classMovieClose();
          this.closeMovieForm = new FormGroup({
            Film: new FormControl("",[Validators.required]),
            GlobalMovie: new FormControl(false,[Validators.required]),
            PricePerHead: new FormControl("",[Validators.required]),
            WithReceipt: new FormControl(false,[Validators.required]),
            TotalParticipants: new FormControl("",[Validators.required]),
            InChargeAmount:new FormControl("",[Validators.required]),
            Order: new FormControl("",[Validators.required]),
            Contact: new FormControl("",[Validators.required]),
            InCharge: new FormControl("",[Validators.required]),
            PeriodId: new FormControl("",[Validators.required]),
            Payment: new FormControl("",[Validators.required]),
            Paid: new FormControl(false,[Validators.required]),
            TotalAmount: new FormControl("",[Validators.required]),
            MovieDate: new FormControl(new Date().toISOString().substring(0, 10),[Validators.required]),
            MovieAddress: new FormControl("",[Validators.required]),
            ContactFirstName: new FormControl("",[Validators.required]),
            ContactLastName: new FormControl("",[Validators.required]),
            ContactEmail: new FormControl("",[Validators.required]),
            ContactPhone: new FormControl("",[Validators.required]),
            ContactAddress: new FormControl("",[Validators.required]),
            InChargeFirstName: new FormControl("",[Validators.required]),
            InChargeLastName: new FormControl("",[Validators.required]),
            InChargeEmail: new FormControl("",[Validators.required]),
            InChargePhone: new FormControl("",[Validators.required]),
            InChargeAddress: new FormControl(""),
            OrderFirstName: new FormControl("",[Validators.required]),
            OrderLastName: new FormControl("",[Validators.required]),
            OrderEmail: new FormControl("",[Validators.required]),
            OrderPhone: new FormControl("",[Validators.required]),
            OrderAddress: new FormControl("")
        })}
        //debugger;
       }, err => {
         this._closeMovie = null;
      })
    })


    //טעינת סרטים
    this._filmsService.getAllFilms().subscribe(data => {
      debugger
      this.films = data;
      console.log(this.films);
    },err =>{
      alert("שגיאה בטעינת סרטים");
    });
    //טעינת עונות
    this._periodService.getAllPeriod().subscribe(data => {
      this.createPeriods(data);
      console.log(this.periods);
    },err =>{
    alert("שגיאה בטעינת אנשי קשר");
    });

    //טעינת אופן תשלום
      this._paymentService.getAllPayment().subscribe(data => {
      this.payments = data;
      console.log(this.payments);
    },err =>{
      alert("שגיאה בטעינת סרטים");
    });
    // debugger;
  }

}
