import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public userName: string;
  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.userName = JSON.parse(sessionStorage.getItem("userName"));
  }
  route(route){
    if(route == 'login'){
      sessionStorage.setItem("flag",JSON.stringify(false));
    }
    this._router.navigate(['/'+ route]);
  }
}
