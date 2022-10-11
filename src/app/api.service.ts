import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }






  viewairlines=()=>{
    return this.http.get("https://api.instantwebtools.net/v1/airlines")
  }

  viewpassengers=()=>{
    return this.http.get("https://api.instantwebtools.net/v1/passenger?page=0&size=30")
  }
}
