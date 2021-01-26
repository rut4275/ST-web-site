import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  public newInCharge:boolean=false;
  public newCulture:boolean=false;
  public displayModal: boolean=false;
  
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
    debugger
    this.displayModal=false;
    this.contacts.push({label: contact.ContactFirstName+" "+contact.ContactLastName, value:
      {ContactId:contact.ContactId,
        ContactFirstName:contact.ContactFirstName,
        ContactLastName:contact.ContactLastName,
        ContactPhone:contact.ContactPhone,
        ContactEmail:contact.ContactEmail,
        ContactAddress:contact.ContactAddress} });

     if(this.newCulture){
      
       this.newCulture=false;
       if(contact.ContactId==-1){
       this.openMovieForm.controls["ContactCulture"].setValue("");
       return;
       }
       this.openMovieForm.controls["ContactCulture"].setValue( {ContactId:contact.ContactId,
        ContactFirstName:contact.ContactFirstName,
        ContactLastName:contact.ContactLastName,
        ContactPhone:contact.ContactPhone,
        ContactEmail:contact.ContactEmail,
        ContactAddress:contact.ContactAddress} );
        this.updateContactCulture();
     }
     if(this.newInCharge){
       debugger
      this.newInCharge=false;
      if(contact.ContactId==-1){
        this.openMovieForm.controls["InCharge"].setValue("");
        return;
        }
      this.openMovieForm.controls["InCharge"].setValue( {ContactId:contact.ContactId,
        ContactFirstName:contact.ContactFirstName,
        ContactLastName:contact.ContactLastName,
        ContactPhone:contact.ContactPhone,
        ContactEmail:contact.ContactEmail,
        ContactAddress:contact.ContactAddress} );
        this.updateInCharge()
     }
  }
  updateContactCulture(){
    if(this.openMovieForm.controls["ContactCulture"].value.ContactId == -1){
      this.newCulture=true;
      this.displayModal=true;
      //this.openMovieForm.controls["ContactCulture"].setValue("");צריך לשנות את זה לאיש קשר החדש!!!1

    }
    const ContactCulture=this.openMovieForm.controls["ContactCulture"].value;
    this.openMovieForm.controls["ContactCultureFirstName"].setValue(ContactCulture.ContactFirstName);
    this.openMovieForm.controls["ContactCultureLastName"].setValue(ContactCulture.ContactLastName);
    this.openMovieForm.controls["ContactCultureEmail"].setValue(ContactCulture.ContactEmail);
    this.openMovieForm.controls["ContactCulturePhone"].setValue(ContactCulture.ContactPhone);
    this.openMovieForm.controls["ContactCultureAddress"].setValue(ContactCulture.ContactAddress);
  }
  updateInCharge(){
    if(this.openMovieForm.controls["InCharge"].value.ContactId == -1){
      this.newInCharge=true;
      this.displayModal=true;

     // this.openMovieForm.controls["InCharge"].setValue("");//צריך לשנות את זה לאיש קשר החדש!!!1
    }
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
    this._openMovie.InChargeId=this.openMovieForm.controls["InCharge"].value.ContactId;

    this._openMovie.Film=this.openMovieForm.controls["Film"].value;
    this._openMovie.FilmId=this.openMovieForm.controls["Film"].value.FilmId;

    this._openMovie.ContactCulture=this.openMovieForm.controls["ContactCulture"].value;
    this._openMovie.ContactCultureId=this.openMovieForm.controls["ContactCulture"].value.ContactId;

    this._openMovie.AuditoriumCost=this.openMovieForm.controls["AuditoriumCost"].value;
    this._openMovie.CityAddress=this.openMovieForm.controls["CityAddress"].value;
    this._openMovie.CountParticipantsAfternoon=this.openMovieForm.controls["CountParticipantsAfternoon"].value;
    this._openMovie.CountParticipantsEvening=this.openMovieForm.controls["CountParticipantsEvening"].value;
    this._openMovie.EquipmentCost=this.openMovieForm.controls["EquipmentCost"].value;
    this._openMovie.InChargeAmount=this.openMovieForm.controls["InChargeAmount"].value;
    this._openMovie.InChargePaid=this.openMovieForm.controls["InChargePaid"].value;
    debugger
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
  newOpenMovie(){
    
    debugger
    this._openMovie.City=this.openMovieForm.controls["City"].value;
    this._openMovie.CityId=this.openMovieForm.controls["City"].value.CityId;

    this._openMovie.InCharge=this.openMovieForm.controls["InCharge"].value;
    this._openMovie.InChargeId=this.openMovieForm.controls["InCharge"].value.ContactId;

    this._openMovie.Film=this.openMovieForm.controls["Film"].value;
    this._openMovie.FilmId=this.openMovieForm.controls["Film"].value.FilmId;

    this._openMovie.ContactCulture=this.openMovieForm.controls["ContactCulture"].value;
    this._openMovie.ContactCultureId=this.openMovieForm.controls["ContactCulture"].value.ContactId;

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

    this._moviesService.newMovieOpenToServer(this._openMovie).subscribe(data=>{
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
          debugger
          this.openMovieForm = new FormGroup({
            Film: new FormControl(this._openMovie.Film),
            City: new FormControl(this._openMovie.City),
            InChargeAmount:new FormControl(this._openMovie.InChargeAmount),
            ContactCulture: new FormControl(this._openMovie.ContactCulture),
            InCharge: new FormControl(this._openMovie.InCharge),
            PeriodId: new FormControl(this._openMovie.PeriodId),
            MovieDate: new FormControl(new Date(this._openMovie.MovieDate).toLocaleDateString('pt-br').split( '/' ).reverse( ).join( '-' ).substring(0, 10),[Validators.required]),
            CityAddress: new FormControl(this._openMovie.CityAddress,[Validators.required]),
            ContactCultureFirstName: new FormControl(this._openMovie.ContactCulture.ContactFirstName,[Validators.required]),
            ContactCultureLastName: new FormControl(this._openMovie.ContactCulture.ContactLastName,[Validators.required]),
            ContactCultureEmail: new FormControl(this._openMovie.ContactCulture.ContactEmail,[Validators.required]),
            ContactCulturePhone: new FormControl(this._openMovie.ContactCulture.ContactPhone,[Validators.required]),
            ContactCultureAddress: new FormControl(this._openMovie.ContactCulture.ContactAddress,[Validators.required]),
            InChargeFirstName: new FormControl(this._openMovie.InCharge.ContactFirstName,[Validators.required]),
            InChargeLastName: new FormControl(this._openMovie.InCharge.ContactLastName,[Validators.required]),
            InChargeEmail: new FormControl(this._openMovie.InCharge.ContactEmail,[Validators.required]),
            InChargePhone: new FormControl(this._openMovie.InCharge.ContactPhone,[Validators.required]),
            InChargeAddress: new FormControl(this._openMovie.InCharge.ContactAddress,[Validators.required]),
            NumberOfSeatsAuditorium: new FormControl(this._openMovie.NumberOfSeatsAuditorium,[Validators.required]),
            WithEquipment: new FormControl(this._openMovie.WithEquipment,[Validators.required]),
            EquipmentCost: new FormControl(this._openMovie.EquipmentCost,[Validators.required]),
            AuditoriumCost: new FormControl(this._openMovie.AuditoriumCost,[Validators.required]),
            CountParticipantsAfternoon: new FormControl(this._openMovie.CountParticipantsAfternoon,[Validators.required]),
            CountParticipantsEvening: new FormControl(this._openMovie.CountParticipantsEvening,[Validators.required]),
            TicketCostAfternoon: new FormControl(this._openMovie.TicketCostAfternoon,[Validators.required]),
            TicketCostEvening: new FormControl(this._openMovie.TicketCostEvening,[Validators.required]),
            InChargePaid: new FormControl(this._openMovie.InChargePaid,[Validators.required]),
            NetProfitForDay: new FormControl(this._openMovie.NetProfitForDay,[Validators.required])


          });}
        else{
          // debugger;
          this._openMovie = new classMovieOpen();
          this.openMovieForm = new FormGroup({
            Film: new FormControl("",[Validators.required]),
            City: new FormControl("",[Validators.required]),
            InChargeAmount:new FormControl("",[Validators.required]),
            ContactCulture: new FormControl("",[Validators.required]),
            InCharge: new FormControl("",[Validators.required]),
            PeriodId: new FormControl("",[Validators.required]),
            MovieDate: new FormControl(new Date().toISOString().substring(0, 10),[Validators.required]),
            CityAddress: new FormControl(""),
            ContactCultureFirstName: new FormControl("",[Validators.required]),
            ContactCultureLastName: new FormControl("",[Validators.required]),
            ContactCultureEmail: new FormControl("",[Validators.required]),
            ContactCulturePhone: new FormControl("",[Validators.required]),
            ContactCultureAddress: new FormControl(""),
            InChargeFirstName: new FormControl("",[Validators.required]),
            InChargeLastName: new FormControl("",[Validators.required]),
            InChargeEmail: new FormControl("",[Validators.required]),
            InChargePhone: new FormControl("",[Validators.required]),
            InChargeAddress: new FormControl(""),
            NumberOfSeatsAuditorium: new FormControl("",[Validators.required]),
            WithEquipment: new FormControl(false,[Validators.required]),
            EquipmentCost: new FormControl("",[Validators.required]),
            AuditoriumCost: new FormControl("",[Validators.required]),
            CountParticipantsAfternoon: new FormControl("",[Validators.required]),
            CountParticipantsEvening: new FormControl("",[Validators.required]),
            TicketCostAfternoon: new FormControl("",[Validators.required]),
            TicketCostEvening: new FormControl("",[Validators.required]),
            InChargePaid: new FormControl(false,[Validators.required]),
            NetProfitForDay: new FormControl("",[Validators.required])
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
