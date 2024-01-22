import { Injectable, inject } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import {AuthLogin} from '../../interfaces/auth.interface'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient)
  router = inject(Router)
  toastr= inject(ToastrService) 

  public header = new HttpHeaders({
    
    'Content-Type': 'application/json'
  })
  public httpOptions = {
    headers: this.header
  }
  constructor() { }

  private apiUrl = environment.baseUrl

  login( value:string, key:string){
    
    const data = {
      value: value,
      key: key
    };
    
     this.http.post<any>(`${this.apiUrl}/Auth`, data,this.httpOptions).subscribe((res)=>{
     
      
      if(res.success){
        localStorage.setItem('token',res.data.token);
        localStorage.setItem('userID',res.data.id);
        this.router.navigateByUrl('');
      }else{
        this.toastr.error(res.message, '');
      }
   

     });
   
    
  }
}
