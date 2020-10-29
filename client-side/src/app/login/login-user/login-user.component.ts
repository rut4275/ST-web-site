import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import {LoginService} from 'src/app/login.service'
import { classUser } from 'src/app/Models/classUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  constructor(private loginService: LoginService, private _router: Router) { 
  }
  public name:string;
  public password:number; 
  public user: classUser;

  login(){
    this.loginService.getUserFromServer(this.name,this.password).subscribe(data => {
      this.user = data;
      alert("שלום" + " " + this.user.UserName);
      sessionStorage.setItem("userName",JSON.stringify(this.user.UserName));
      if(this.user){
        //this._router.navigate(['nevigate']);
      }
    },err =>{
      alert("שם משתמש שגוי!");
    });
  }

  goToPage(page){
    sessionStorage.setItem("flag",JSON.stringify(true));
    this._router.navigate([page]);  
  }

  ngOnInit(): void {
    sessionStorage.setItem("flag",JSON.stringify(false));
  }

}
