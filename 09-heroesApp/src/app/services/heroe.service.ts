 import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroeModel } from '../models/heroe.model';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroeService {
private url='https://login-app-e9e08-default-rtdb.firebaseio.com';
  constructor(private http: HttpClient) { }

  crearHeroe(heroe: HeroeModel){
return this.http.post(`${this.url}/heroes.json`, heroe)
     .pipe(

      map((resp:any)=>{
            heroe.id=resp.name;
            return heroe;

      }));


  }



}