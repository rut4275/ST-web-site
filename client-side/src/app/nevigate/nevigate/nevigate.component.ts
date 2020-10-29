import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nevigate',
  templateUrl: './nevigate.component.html',
  styleUrls: ['./nevigate.component.css']
})
export class NevigateComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
}
