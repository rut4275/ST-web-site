import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { classMovieClose } from 'src/app/Models/classMovieClose';
import { classMovieOpen } from 'src/app/Models/classMovieOpen';
import { moviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  public moviesOpenList:classMovieOpen[];
  public moviesCloseList:classMovieClose[];
  public moviesTypeOpen:boolean;

  constructor(private _moviesService :moviesService, private _router: Router) {
    
    //טעינת הקרנות סגורות 
    _moviesService.getAllMoviesCloesFromServer().subscribe(data => {
      this.moviesCloseList = data;
      this.moviesTypeOpen=false;
    },err =>{
      alert("שגיאה בטעינת טבלת הקרנות סגורות");
    });

    //טעינת הקרנות פתוחות 
    //

    _moviesService.getAllMoviesOpenFromServer().subscribe(data => {
      this.moviesOpenList = data;
      this.moviesTypeOpen=true;
      debugger
    },err =>{
      alert("שגיאה בטעינת טבלת הקרנות פתוחות");
    });


   }

  ngOnInit(): void {
  }

}


