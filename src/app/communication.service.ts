import { Injectable } from '@angular/core';
import {Http ,Response } from '@angular/http';
import {HttpClient} from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor(private _http:Http) { }

  getAPI(){
    return this._http.get('/fetch').pipe(map((response:Response) => response.json()));}
    

}
