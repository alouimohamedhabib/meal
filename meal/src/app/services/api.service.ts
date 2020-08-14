import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { params } from '../config/params';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor( private Http: HttpClient ) {}

  getproducts(): Observable<any>{
    return this.Http.get(params.ApiUrl+"products");
  }
}
