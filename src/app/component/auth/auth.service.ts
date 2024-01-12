import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthLogin} from '../../interfaces/auth.interface'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public header = new HttpHeaders({
    
    'Content-Type': 'application/json'
  })
  public httpOptions = {
    headers: this.header
  }
  constructor(http: HttpClient) { }

  private apiUrl = 'https://localhost:44367';

  login( value:string, key:string): any {
    // Construye el objeto de datos que enviarás a la API
    const data = {
      value: value,
      password: key
    };
    // let response = this.http.post<AuthLogin>(`${this.apiUrl}/login`, data,this.httpOptions);
    // console.log(response);
    
    // Realiza la solicitud POST a la API para el inicio de sesión
    return data
  }
}
