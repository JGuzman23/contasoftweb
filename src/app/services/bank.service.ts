import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Bank } from 'app/interfaces/bank.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {

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
    return this.http.get<any>(`${this.apiUrl}/Bank/${companyId}`);
  }
  GetAllBanks(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Bank`);
  }
  // async getAllBanks(): Promise<any[]> {
  //   try {
  //     const response = await this.http.get<any>(`${this.apiUrl}/Bank`).toPromise();
  //     return [response.data]; 
  //   } catch (error) {
  //     console.error('Error en la solicitud HTTP', error);
  //     throw error;
  //   }
  // }
  create (model:Bank): Observable<any>{

    return this.http.post<any>(`${this.apiUrl}/bank`, model,this.httpOptions)
      
  }
}
