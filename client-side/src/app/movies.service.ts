import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { classMovieClose } from './Models/classMovieClose';
import { classMovieOpen } from './Models/classMovieOpen';
import { Observable } from 'rxjs';

@Injectable()
export class moviesService{

    constructor(private _http: HttpClient) {
        
    }

    //בקשת רשימת הקרנות סגורות   
    getAllMoviesCloesFromServer(): Observable<classMovieClose[]> {
        return this._http.get<classMovieClose[]>("/api/moviesClose");
    }
    
    //בקשת רשימת הקרנות פתוחות
    getAllMoviesOpenFromServer(): Observable<classMovieOpen[]> {
        return this._http.get<classMovieOpen[]>("/api/moviesOpen");
    }

    // putMoviesInServer(o: classBooksOrders): Observable<classBooksOrders> {
    //     return this._http.post<classBooksOrders>("/api/movies",o);
    // }

    // updateOrderInServer(o: classBooksOrders): Observable<classBooksOrders> {
    //     return this._http.put<classBooksOrders>("/api/movies",o);
    // }
}
