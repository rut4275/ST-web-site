import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { classFilms } from './Models/classFilms';
import { Observable } from 'rxjs';

@Injectable()
export class filmsService{

    constructor(private _http: HttpClient) {
    }
    
    getAllFilms(): Observable<classFilms[]> {
        return this._http.get<classFilms[]>("/api/films");
    }

    // putOrderInServer(o: classBooksOrders): Observable<classBooksOrders> {
    //     return this._http.post<classBooksOrders>("/api/books",o);
    // }

    // updateOrderInServer(o: classBooksOrders): Observable<classBooksOrders> {
    //     return this._http.put<classBooksOrders>("/api/books",o);
    // }
    
}