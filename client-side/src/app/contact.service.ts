import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { classContacts } from './Models/classContacts';
import { Observable } from 'rxjs';

@Injectable()
export class contactsService{

    constructor(private _http: HttpClient) {
    }
    getAllContacts() {
        // debugger;
        return this._http.get<classContacts[]>("/api/contacts");
    }
    
    getContactById(id:number): Observable<classContacts> {
        return this._http.get<classContacts>("/api/contacts/"+id);
    }

    putContactInServer(c: classContacts): Observable<classContacts> {
        debugger
        return this._http.post<classContacts>("/api/contacts",c);
    }

    // updateOrderInServer(o: classBooksOrders): Observable<classBooksOrders> {
    //     return this._http.put<classBooksOrders>("/api/books",o);
    // }
    
}