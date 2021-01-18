import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

interface City {
  name: string;
  code: string;
}

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
  public status:number=1;

  createArray(contact:classContacts[]){
    this.contacts=[];
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
  updateOrder(){
     const order=this.closeMovieForm.controls["Order"].value;
     this.closeMovieForm.controls["OrderFirstName"].setValue(order.ContactFirstName);
     this.closeMovieForm.controls["OrderLastName"].setValue(order.ContactLastName);
     this.closeMovieForm.controls["OrderEmail"].setValue(order.ContactEmail);
     this.closeMovieForm.controls["OrderPhone"].setValue(order.ContactPhone);
     this.closeMovieForm.controls["OrderAddress"].setValue(order.ContactAddress);
  }
  updateInCharge(){

    const inCharge=this.closeMovieForm.controls["InCharge"].value;
    this.closeMovieForm.controls["InChargeFirstName"].setValue(inCharge.ContactFirstName);
    this.closeMovieForm.controls["InChargeLastName"].setValue(inCharge.ContactLastName);
    this.closeMovieForm.controls["InChargeEmail"].setValue(inCharge.ContactEmail);
    this.closeMovieForm.controls["InChargePhone"].setValue(inCharge.ContactPhone);
    this.closeMovieForm.controls["InChargeAddress"].setValue(inCharge.ContactAddress);
  }
  updateContact(){

    const contact=this.closeMovieForm.controls["Contact"].value;
    this.closeMovieForm.controls["ContactFirstName"].setValue(contact.ContactFirstName);
    this.closeMovieForm.controls["ContactLastName"].setValue(contact.ContactLastName);
    this.closeMovieForm.controls["ContactEmail"].setValue(contact.ContactEmail);
    this.closeMovieForm.controls["ContactPhone"].setValue(contact.ContactPhone);
    this.closeMovieForm.controls["ContactAddress"].setValue(contact.ContactAddress);
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
  
  
  constructor(private _acr:ActivatedRoute,private _moviesService :moviesService, private _router: Router
    ,private _periodService:moviesPeriodService ,private _paymentService:moviesPaymentService
    ,private _contactsService:contactsService ,private _filmsService:filmsService) { 
    //טעינת אנשי קשר
    this._contactsService.getAllContacts().subscribe(data => {
      this.createArray(data);
      console.log(this.contacts);
    },err =>{
      alert("שגיאה בטעינת אנשי קשר");
    });
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
            Film: new FormControl(this._closeMovie.Film),
            GlobalMovie: new FormControl(this._closeMovie.GlobalMovie),
            PricePerHead: new FormControl(this._closeMovie.PricePerHead),
            WithReceipt: new FormControl(this._closeMovie.WithReceipt),
            TotalParticipants: new FormControl(this._closeMovie.TotalParticipants),
            InChargeAmount:new FormControl(this._closeMovie.InChargeAmount),
            Order: new FormControl(this._closeMovie.Order),
            Contact: new FormControl(this._closeMovie.Contact),
            InCharge: new FormControl(this._closeMovie.InCharge),
            PeriodId: new FormControl(this._closeMovie.PeriodId),
            Payment: new FormControl(this._closeMovie.Payment),
            Paid: new FormControl(this._closeMovie.Paid),
            TotalAmount: new FormControl(this._closeMovie.TotalAmount),
            MovieDate: new FormControl(new Date(this._closeMovie.MovieDate).toISOString().substring(0, 10)),
            MovieAddress: new FormControl(this._closeMovie.MovieAddress),
            ContactFirstName: new FormControl(this._closeMovie.Contact.ContactFirstName),
            ContactLastName: new FormControl(this._closeMovie.Contact.ContactLastName),
            ContactEmail: new FormControl(this._closeMovie.Contact.ContactEmail),
            ContactPhone: new FormControl(this._closeMovie.Contact.ContactPhone),
            ContactAddress: new FormControl(this._closeMovie.Contact.ContactAddress),
            InChargeFirstName: new FormControl(this._closeMovie.InCharge.ContactFirstName),
            InChargeLastName: new FormControl(this._closeMovie.InCharge.ContactLastName),
            InChargeEmail: new FormControl(this._closeMovie.InCharge.ContactEmail),
            InChargePhone: new FormControl(this._closeMovie.InCharge.ContactPhone),
            InChargeAddress: new FormControl(this._closeMovie.InCharge.ContactAddress),
            OrderFirstName: new FormControl(this._closeMovie.Order.ContactFirstName),
            OrderLastName: new FormControl(this._closeMovie.Order.ContactLastName),
            OrderEmail: new FormControl(this._closeMovie.Order.ContactEmail),
            OrderPhone: new FormControl(this._closeMovie.Order.ContactPhone),
            OrderAddress: new FormControl(this._closeMovie.Order.ContactAddress)
          });}
        else{
          // debugger;
          this._closeMovie = new classMovieClose();
          this.closeMovieForm = new FormGroup({
            Film: new FormControl(""),
            GlobalMovie: new FormControl(""),
            PricePerHead: new FormControl(""),
            WithReceipt: new FormControl(""),
            TotalParticipants: new FormControl(""),
            InChargeAmount:new FormControl(""),
            Order: new FormControl(""),
            Contact: new FormControl(""),
            InCharge: new FormControl(""),
            Period: new FormControl(""),
            Payment: new FormControl(""),
            Paid: new FormControl(""),
            TotalAmount: new FormControl(""),
            MovieDate: new FormControl(""),
            MovieAddress: new FormControl(""),
            ContactFirstName: new FormControl(""),
            ContactLastName: new FormControl(""),
            ContactEmail: new FormControl(""),
            ContactPhone: new FormControl(""),
            ContactAddress: new FormControl(""),
            InChargeFirstName: new FormControl(""),
            InChargeLastName: new FormControl(""),
            InChargeEmail: new FormControl(""),
            InChargePhone: new FormControl(""),
            InChargeAddress: new FormControl(""),
            OrderFirstName: new FormControl(""),
            OrderLastName: new FormControl(""),
            OrderEmail: new FormControl(""),
            OrderPhone: new FormControl(""),
            OrderAddress: new FormControl("")
        })}
        //debugger;
       }, err => {
         this._closeMovie = null;
      })
    })


    //טעינת סרטים
    this._filmsService.getAllFilms().subscribe(data => {
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
