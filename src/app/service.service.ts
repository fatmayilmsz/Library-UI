import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  getHeaders(){
    return new HttpHeaders({
      "Content-Type":"application/json",
    });
  }

  constructor(private http:HttpClient) { }
    Get(url: any, params: any) {
    return this.http.get(url + params, { headers: this.getHeaders() });
  }
  
  Post(url:any, data:any) {
    return this.http.post(url, data, { headers: this.getHeaders() })
  }

  Put(url:any, data:any) {
    return this.http.put(url, data, { headers: this.getHeaders() })
  }

  Delete(url:any, data:any) {
    let options = { headers: this.getHeaders(), body: data };
    return this.http.delete(url, options);
  }
}
