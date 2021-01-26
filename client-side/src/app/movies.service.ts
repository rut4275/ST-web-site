import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { classMovieClose } from './Models/classMovieClose';
import { classMovieOpen } from './Models/classMovieOpen';
import { Observable } from 'rxjs';

@Injectable()
export class moviesService{


    constructor(private _http: HttpClient) {
        
    }

    getOpenMovieFromServer(id: number) :Observable<classMovieOpen> {
        return this._http.get<classMovieOpen>("/api/moviesOpen/"+id);
    }

    getCloseMovieFromServer(id:number): Observable<classMovieClose> {
        return this._http.get<classMovieClose>("/api/moviesClose/"+id);
    }

    updateCloseMovieInServer(movie : classMovieClose): Observable<classMovieClose> {
        return this._http.put<classMovieClose>("/api/moviesClose",movie);
    }

    updateOpenMovieInServer(movie : classMovieOpen): Observable<classMovieOpen> {
        return this._http.put<classMovieOpen>("/api/moviesOpen/0",movie);
    }

    //בקשת רשימת הקרנות סגורות   
    getAllMoviesCloesFromServer(): Observable<classMovieClose[]> {
        // debugger;
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
    newMovieCloseToServer(movie:classMovieClose): Observable<classMovieClose> {
        return this._http.post<classMovieClose>("/api/moviesClose",movie);
    }
    newMovieOpenToServer(movie:classMovieOpen): Observable<classMovieOpen> {
        return this._http.post<classMovieOpen>("/api/moviesOpen",movie);
    }
}
