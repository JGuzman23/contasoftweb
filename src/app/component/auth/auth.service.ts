import { Injectable, inject } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import {AuthLogin} from '../../interfaces/auth.interface'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient)
  public header = new HttpHeaders({
    
    'Content-Type': 'application/json'
  })
  public httpOptions = {
    headers: this.header
  }
  constructor() { }

  private apiUrl = 'https://localhost:44367/api';

  login( value:string, key:string){
    
    const data = {
      value: value,
      key: key
    };
    
     this.http.post<any>(`${this.apiUrl}/Auth`, data,this.httpOptions).subscribe((res)=>{
      localStorage.setItem('token',res.token);

     });
   
    
  }
}
