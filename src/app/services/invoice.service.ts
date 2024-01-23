import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { InvoiceBill } from 'app/interfaces/bill.interface';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  http = inject(HttpClient)
  private apiUrl = environment.baseUrl

  public header = new HttpHeaders({
    
    'Content-Type': 'application/json'
  })
  public httpOptions = {
    headers: this.header
  }
  constructor() {

   }

   GetMyInvoice606(companyId: number): Observable<any> {
   
    
    return this.http.get<any>(`${this.apiUrl}/Invoice/${companyId}`);
  }
  GetMy606s(companyId: number): Observable<any> {
   
    
    return this.http.get<any>(`${this.apiUrl}/Invoice/606/${companyId}`);
  }
 
  createInvoice606 (model:InvoiceBill): Observable<any>{

    return this.http.post<any>(`${this.apiUrl}/Invoice`, model,this.httpOptions)
      
  }
}
