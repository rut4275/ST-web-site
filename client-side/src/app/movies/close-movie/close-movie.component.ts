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
import {DropdownModule} from 'primeng/dropdown';


@Component({
  selector: 'app-close-movie',
  templateUrl: './close-movie.component.html',
  styleUrls: ['./close-movie.component.css']
})
export class CloseMovieComponent implements OnInit {

  public _closeMovie:classMovieClose;
  public films:classFilms[];
  public contacts:classContacts[];
  public payments:classMoviePayment[];
  public periods:classMoviePeriod[];
  public closeMovieForm: FormGroup;
  public flag:boolean;
  public status:number=1;

  updateCloseMovie(){

  }
  
  constructor(private _acr:ActivatedRoute,private _moviesService :moviesService, private _router: Router
    ,private _periodService:moviesPeriodService ,private _paymentService:moviesPaymentService
    ,private _contactsService:contactsService ,private _filmsService:filmsService) { }

  ngOnInit(): void {
    this._acr.paramMap.subscribe(params => {
      let closeMovieId = +params.get("id");
      this.flag = Boolean(+params.get("flag"));
      debugger;
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
            Period: new FormControl(this._closeMovie.Period),
            Payment: new FormControl(this._closeMovie.Payment),
            Paid: new FormControl(this._closeMovie.Paid),
            TotalAmount: new FormControl(this._closeMovie.TotalAmount),
            MovieDate: new FormControl(this._closeMovie.MovieDate),
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
          debugger;
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

    //טעינת אנשי קשר
    this._contactsService.getAllContacts().subscribe(data => {
      this.contacts = data;
      console.log(this.contacts);
    },err =>{
      alert("שגיאה בטעינת אנשי קשר");
    });

    //טעינת סרטים
    this._filmsService.getAllFilms().subscribe(data => {
      this.films = data;
      console.log(this.films);
    },err =>{
      alert("שגיאה בטעינת סרטים");
    });
    //טעינת עונות
    this._periodService.getAllPeriod().subscribe(data => {
      this.periods = data;
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
    debugger;
  }

}
