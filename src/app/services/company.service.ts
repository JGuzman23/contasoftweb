import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Company } from 'app/interfaces/company.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  http = inject(HttpClient)
  private apiUrl = 'https://localhost:44367/api';

  public header = new HttpHeaders({
    
    'Content-Type': 'application/json'
  })
  public httpOptions = {
    headers: this.header
  }
  constructor() { }

  Get(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/company?userID=${id}`);
  }

  create (model:Company): Observable<any>{

    return this.http.post<any>(`${this.apiUrl}/company`, model,this.httpOptions)
      
  }
}
