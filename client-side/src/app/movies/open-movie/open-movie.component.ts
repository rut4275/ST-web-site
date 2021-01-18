import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { citiesService } from 'src/app/cities.service';
import { contactsService } from 'src/app/contact.service';
import { filmsService } from 'src/app/films.service';
import { classCities } from 'src/app/Models/classCities';
import { classContacts } from 'src/app/Models/classContacts';
import { classFilms } from 'src/app/Models/classFilms';
import { classMovieOpen } from 'src/app/Models/classMovieOpen';
import { classMoviePayment } from 'src/app/Models/classMoviePayment';
import { classMoviePeriod } from 'src/app/Models/classMoviePeriod';
import { moviesService } from 'src/app/movies.service';
import { moviesPaymentService } from 'src/app/moviesPayment.service';
import { moviesPeriodService } from 'src/app/moviesPeriod.service';

@Component({
  selector: 'app-open-movie',
  templateUrl: './open-movie.component.html',
  styleUrls: ['./open-movie.component.css']
})
export class OpenMovieComponent implements OnInit {
  _contact:classContacts[];
  public films:classFilms[];
  public contacts:SelectItem[];
  public payments:classMoviePayment[];
  public cities:classCities[];
  public periods:SelectItem[];
  public flag:boolean;
  public status:number=1;
  public _openMovie:classMovieOpen;
  public openMovieForm: FormGroup;

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

  updateContactCulture(){
    
    const ContactCulture=this.openMovieForm.controls["ContactCulture"].value;
    this.openMovieForm.controls["ContactCultureFirstName"].setValue(ContactCulture.ContactFirstName);
    this.openMovieForm.controls["ContactCultureLastName"].setValue(ContactCulture.ContactLastName);
    this.openMovieForm.controls["ContactCultureEmail"].setValue(ContactCulture.ContactEmail);
    this.openMovieForm.controls["ContactCulturePhone"].setValue(ContactCulture.ContactPhone);
    this.openMovieForm.controls["ContactCultureAddress"].setValue(ContactCulture.ContactAddress);
  }
  updateInCharge(){

    const inCharge=this.openMovieForm.controls["InCharge"].value;
    this.openMovieForm.controls["InChargeFirstName"].setValue(inCharge.ContactFirstName);
    this.openMovieForm.controls["InChargeLastName"].setValue(inCharge.ContactLastName);
    this.openMovieForm.controls["InChargeEmail"].setValue(inCharge.ContactEmail);
    this.openMovieForm.controls["InChargePhone"].setValue(inCharge.ContactPhone);
    this.openMovieForm.controls["InChargeAddress"].setValue(inCharge.ContactAddress);
  }

  updateOpenMovie(){

    debugger
    this._openMovie.City=this.openMovieForm.controls["City"].value;
    this._openMovie.CityId=this.openMovieForm.controls["City"].value.CityId;

    this._openMovie.InCharge=this.openMovieForm.controls["InCharge"].value;
    this._openMovie.InChargeId=this.openMovieForm.controls["InCharge"].value.InChargeId;

    this._openMovie.Film=this.openMovieForm.controls["Film"].value;
    this._openMovie.FilmId=this.openMovieForm.controls["Film"].value.FilmId;

    this._openMovie.ContactCulture=this.openMovieForm.controls["AuditoriumCost"].value;
    this._openMovie.ContactCultureId=this.openMovieForm.controls["AuditoriumCost"].value;

    this._openMovie.AuditoriumCost=this.openMovieForm.controls["AuditoriumCost"].value;
    this._openMovie.CityAddress=this.openMovieForm.controls["CityAddress"].value;
    this._openMovie.CountParticipantsAfternoon=this.openMovieForm.controls["CountParticipantsAfternoon"].value;
    this._openMovie.CountParticipantsEvening=this.openMovieForm.controls["CountParticipantsEvening"].value;
    this._openMovie.EquipmentCost=this.openMovieForm.controls["EquipmentCost"].value;
    this._openMovie.InChargeAmount=this.openMovieForm.controls["InChargeAmount"].value;
    this._openMovie.InChargePaid=this.openMovieForm.controls["InChargePaid"].value;
    this._openMovie.MovieDate=this.openMovieForm.controls["MovieDate"].value;
    this._openMovie.NetProfitForDay=this.openMovieForm.controls["NetProfitForDay"].value;
    this._openMovie.NumberOfSeatsAuditorium=this.openMovieForm.controls["NumberOfSeatsAuditorium"].value;
    this._openMovie.PeriodId=this.openMovieForm.controls["PeriodId"].value;
    this._openMovie.TicketCostAfternoon=this.openMovieForm.controls["TicketCostAfternoon"].value;
    this._openMovie.TicketCostEvening=this.openMovieForm.controls["TicketCostEvening"].value;
    this._openMovie.WithEquipment=this.openMovieForm.controls["WithEquipment"].value;

    this._moviesService.updateOpenMovieInServer(this._openMovie).subscribe(data=>{
      this._router.navigate(["/movies/1"]);
      alert("ההזמנה עודכנה בהצלחה")
    },
    err => {
      alert("שגיאה בעדכון הפרטים, ההזמנה לא עודכנה")
      this.status=1
    });
  }
  constructor(private _acr:ActivatedRoute,private _moviesService :moviesService, private _router: Router
    ,private _periodService:moviesPeriodService ,private _paymentService:moviesPaymentService
    ,private _contactsService:contactsService ,private _filmsService:filmsService
    ,private _citiesService:citiesService) {
      debugger
    }

  ngOnInit(): void {
    debugger
    this._acr.paramMap.subscribe(params => {
      let openMovieId = +params.get("id");
      this.flag = Boolean(+params.get("flag"));
       debugger;
      this._moviesService.getOpenMovieFromServer(openMovieId).subscribe(data => {
        if (openMovieId != 0) {
          this._openMovie = data;
          this.openMovieForm = new FormGroup({
            Film: new FormControl(this._openMovie.Film),
            City: new FormControl(this._openMovie.City),
            InChargeAmount:new FormControl(this._openMovie.InChargeAmount),
            ContactCulture: new FormControl(this._openMovie.ContactCulture),
            InCharge: new FormControl(this._openMovie.InCharge),
            PeriodId: new FormControl(this._openMovie.PeriodId),
            MovieDate: new FormControl(new Date(this._openMovie.MovieDate).toISOString().substring(0, 10)),
            CityAddress: new FormControl(this._openMovie.CityAddress),
            ContactCultureFirstName: new FormControl(this._openMovie.ContactCulture.ContactFirstName),
            ContactCultureLastName: new FormControl(this._openMovie.ContactCulture.ContactLastName),
            ContactCultureEmail: new FormControl(this._openMovie.ContactCulture.ContactEmail),
            ContactCulturePhone: new FormControl(this._openMovie.ContactCulture.ContactPhone),
            ContactCultureAddress: new FormControl(this._openMovie.ContactCulture.ContactAddress),
            InChargeFirstName: new FormControl(this._openMovie.InCharge.ContactFirstName),
            InChargeLastName: new FormControl(this._openMovie.InCharge.ContactLastName),
            InChargeEmail: new FormControl(this._openMovie.InCharge.ContactEmail),
            InChargePhone: new FormControl(this._openMovie.InCharge.ContactPhone),
            InChargeAddress: new FormControl(this._openMovie.InCharge.ContactAddress),
            NumberOfSeatsAuditorium: new FormControl(this._openMovie.NumberOfSeatsAuditorium),
            WithEquipment: new FormControl(this._openMovie.WithEquipment),
            EquipmentCost: new FormControl(this._openMovie.EquipmentCost),
            AuditoriumCost: new FormControl(this._openMovie.AuditoriumCost),
            CountParticipantsAfternoon: new FormControl(this._openMovie.CountParticipantsAfternoon),
            CountParticipantsEvening: new FormControl(this._openMovie.CountParticipantsEvening),
            TicketCostAfternoon: new FormControl(this._openMovie.TicketCostAfternoon),
            TicketCostEvening: new FormControl(this._openMovie.TicketCostEvening),
            InChargePaid: new FormControl(this._openMovie.InChargePaid),
            NetProfitForDay: new FormControl(this._openMovie.NetProfitForDay)


          });}
        else{
          // debugger;
          this._openMovie = new classMovieOpen();
          this.openMovieForm = new FormGroup({
            Film: new FormControl(""),
            InChargeAmount:new FormControl(""),
            ContactCulture: new FormControl(""),
            InCharge: new FormControl(""),
            PeriodId: new FormControl(""),
            MovieDate: new FormControl(""),
            CityAddress: new FormControl(""),
            ContactCultureFirstName: new FormControl(""),
            ContactCultureLastName: new FormControl(""),
            ContactCultureEmail: new FormControl(""),
            ContactCulturePhone: new FormControl(""),
            ContactCultureAddress: new FormControl(""),
            InChargeFirstName: new FormControl(""),
            InChargeLastName: new FormControl(""),
            InChargeEmail: new FormControl(""),
            InChargePhone: new FormControl(""),
            InChargeAddress: new FormControl(""),
            NumberOfSeatsAuditorium: new FormControl(""),
            WithEquipment: new FormControl(""),
            EquipmentCost: new FormControl(""),
            AuditoriumCost: new FormControl(""),
            CountParticipantsAfternoon: new FormControl(""),
            CountParticipantsEvening: new FormControl(""),
            TicketCostAfternoon: new FormControl(""),
            TicketCostEvening: new FormControl(""),
            InChargePaid: new FormControl(""),
            NetProfitForDay: new FormControl("")
        })}
        //debugger;
       }, err => {
         this._openMovie = null;
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

    //טעינת רשימת ערים
      this._citiesService.getAllCities().subscribe(data => {
      this.cities = data;
      console.log(this.cities);
    },err =>{
      alert("שגיאה בטעינת ערים");
    });
    // debugger;
    //טעינת אנשי קשר
    this._contactsService.getAllContacts().subscribe(data => {
      this.createArray(data);
      console.log(this.contacts);
    },err =>{
      alert("שגיאה בטעינת אנשי קשר");
    });
  }

}
