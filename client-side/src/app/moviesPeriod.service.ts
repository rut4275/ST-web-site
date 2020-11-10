import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { classMoviePeriod } from './Models/classMoviePeriod';
import { Observable } from 'rxjs';

@Injectable()
export class moviesPeriodService{

    constructor(private _http: HttpClient) {
    }
    
    getAllPeriod(): Observable<classMoviePeriod[]> {
        return this._http.get<classMoviePeriod[]>("/api/MoviesPeriod");
    }
    
}