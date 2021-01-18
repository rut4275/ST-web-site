import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { classCities } from './Models/classCities';
import { Observable } from 'rxjs';

@Injectable()
export class citiesService{

    constructor(private _http: HttpClient) {
    }
    getAllCities() {
        // debugger;
        return this._http.get<classCities[]>("/api/cities");
    }
    
}