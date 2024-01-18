import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Transaction } from 'app/interfaces/transaction.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {



  http = inject(HttpClient)
  private apiUrl = 'https://localhost:44367/api';

  public header = new HttpHeaders({
    
    'Content-Type': 'application/json'
  })
  public httpOptions = {
    headers: this.header
  }
  constructor() { }

  Get(companyId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Transactions/${companyId}`);
  }

  create (model:Transaction): Observable<any>{

    return this.http.post<any>(`${this.apiUrl}/company`, model,this.httpOptions)
      
  }
}
