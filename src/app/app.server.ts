import { Injectable } from '@angular/core'
import {HttpClient} from '@angular/common/http'
import { retry } from 'rxjs/operators'

@Injectable()

export class AppServer{
    
    constructor(private _http:HttpClient){}

    getItems(){
        return this._http.get('https://api.spacexdata.com/v3/launches?limit=100')
        .pipe(retry(3));
    }
}