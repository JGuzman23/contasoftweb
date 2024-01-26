import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Bank } from 'app/interfaces/bank.interface';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  http = inject(HttpClient)
  private apiUrl = environment.baseUrl

  public header = new HttpHeaders({
    
    'Content-Type': 'application/json'
  })
  public httpOptions = {
    headers: this.header
  }
  constructor() { }

  async Get(companyId: number): Promise<Observable<any>> {
    return this.http.get<any>(`${this.apiUrl}/Bank/${companyId}`);
  }
  GetAllBanks(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Bank`);
  }
  GetMyBanks(companyId:number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Bank/${companyId}`);
  }
  
  asingnar (model:Bank): Observable<any>{

    return this.http.post<any>(`${this.apiUrl}/bank`, model,this.httpOptions)
      
  }
}
