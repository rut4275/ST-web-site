import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {classUser} from './Models/classUser';
@Injectable()
export class LoginService{
    constructor(private _http: HttpClient) {
        
    }
    getUserFromServer(name:string, password:number): Observable<classUser> {
        return this._http.get<classUser>("/api/login?name=" + name + "&password=" + password);
         
    }
}
