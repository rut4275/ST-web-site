import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  public moviesTypeOpen:boolean=true;


  // changType(isOpen:boolean){
  //   this.moviesTypeOpen=isOpen;
  // }

  // newMovie(){
  //   if(this.moviesTypeOpen){
  //     this._router.navigate(['/openMovies',0, false])
  //   }
  //   else{
  //     this._router.navigate(['/closeMovies',0, false]);
  //   }
  // }
  delete(idMovie:number){

  }
  goToEdit(idMovie:number,flag:number){
    debugger
    if(this.moviesTypeOpen){
      this._router.navigate(['/openMovies',idMovie, flag]);
    }else{
      this._router.navigate(['/closeMovies',idMovie, flag]);

    }
  }
  constructor(private _acr:ActivatedRoute,private _moviesService :moviesService, private _router: Router) {

    this._acr.paramMap.subscribe(params => {
      //טעינת הקרנות סגורות 
    _moviesService.getAllMoviesCloesFromServer().subscribe(data => {
      this.moviesCloseList = data;
      //this.moviesTypeOpen=false;
      console.log(this.moviesCloseList);
    },err =>{
      alert("שגיאה בטעינת טבלת הקרנות סגורות");
    });

    //טעינת הקרנות פתוחות 
    //

    _moviesService.getAllMoviesOpenFromServer().subscribe(data => {
      this.moviesOpenList = data;
      //this.moviesTypeOpen=true;
      console.log(this.moviesOpenList);
      debugger
    },err =>{
      alert("שגיאה בטעינת טבלת הקרנות פתוחות");
    });


      this.moviesTypeOpen = Boolean(+params.get("isOpen"))
    
    })

   }

  ngOnInit(): void {

  }
}


