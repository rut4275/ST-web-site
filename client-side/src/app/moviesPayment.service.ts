import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { classMoviePayment } from './Models/classMoviePayment';
import { Observable } from 'rxjs';

@Injectable()
export class moviesPaymentService{

    constructor(private _http: HttpClient) {
    }
    
    getAllPayment(): Observable<classMoviePayment[]> {
        return this._http.get<classMoviePayment[]>("/api/MoviesPayments");
    }
    
}