import { Component, OnInit } from '@angular/core';
import {  } from './login/login.module';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  flag:boolean;
  title = 'project';
  constructor(private router: Router) {}
  ngOnInit(){
    if(this.router.url === '/login'){
    sessionStorage.setItem("flag",JSON.stringify(false));
  }
    this.flag = JSON.parse(sessionStorage.getItem("flag"));
    var timer = setInterval(() => { this.countinueTimer(); }, 10);
}
countinueTimer(){
  this.flag = JSON.parse(sessionStorage.getItem("flag"));
}

}
