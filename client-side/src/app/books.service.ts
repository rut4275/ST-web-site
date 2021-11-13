import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { classBooksOrders } from './Models/classBooksOrders';
import { Observable } from 'rxjs';
import { classBooksOrderItem } from './Models/classBooksOrderItem';

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
    updateOrderItemsInServer(o: classBooksOrders): Observable<classBooksOrders> {
        return this._http.put<classBooksOrders>("/api/BookOrderItems",o);
    }
    // deleteOrderItemInServer(bookId: number):Observable<number> {
    //     return this._http.delete<classBooksOrderItem>("/api/books",bookId);
    // }
}
