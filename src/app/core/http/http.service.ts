import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl:string = environment.baseUrl ;
  httpHeaderOptions = {
    "headers":new HttpHeaders()
              .set("Content-type","application/json")
              .set("Allow-All-origin","*")
  }
  constructor(private http:HttpClient) { }

  getData(endPoint: string, params: HttpParams = new HttpParams()) {
    const url = this.baseUrl + endPoint;
    return this.http.get<any>(url, { params });
  }

  postData(endPoint: string, data: any) {
    const url = this.baseUrl + endPoint;
    return this.http.post<any>(url, data,this.httpHeaderOptions);
  }



}
