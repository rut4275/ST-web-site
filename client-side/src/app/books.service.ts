import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { classBooksOrders } from './Models/classBooksOrders';
import { Observable } from 'rxjs';

@Injectable()
export class booksService{

    constructor(private _http: HttpClient) {
    }
    
    getAllBooksOrderFromServer(): Observable<classBooksOrders[]> {
        return this._http.get<classBooksOrders[]>("/api/books");
    }

    putOrderInServer(o: classBooksOrders): Observable<classBooksOrders> {
        return this._http.post<classBooksOrders>("/api/books",o);
    }

    updateOrderInServer(o: classBooksOrders): Observable<classBooksOrders> {
        return this._http.put<classBooksOrders>("/api/books",o);
    }
}
