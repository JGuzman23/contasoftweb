import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { InvoiceBill } from 'app/interfaces/bill.interface';
import { InvoiceIncome } from 'app/interfaces/income.interface';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  http = inject(HttpClient);
  private apiUrl = environment.baseUrl;

  public header = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  public httpOptions = {
    headers: this.header,
  };
  constructor() {}

  GetMyInvoice607(companyId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Invoice/invoice607/${companyId}`);
  }
  GetMy607s(companyId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Invoice/607/${companyId}`);
  }

  createInvoice607(model: InvoiceIncome): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/Invoice/invoice607`,
      model,
      this.httpOptions
    );
  }

  Generar607(anomes:string): Observable<any> {
    var company = localStorage.getItem('company') || '';
    var jsonCompany = JSON.parse(company);
    let data={
      companyID:jsonCompany.id,
      anomes:anomes,
      rnc:jsonCompany.rnc
    }
    
    return this.http.post<any>(`${this.apiUrl}/Invoice/607`,data,this.httpOptions);
  }

  descargar607(o607id:number,formato:number): Observable<any> {
    let data={
      O607Id:o607id,
      formato:formato
    }

    return this.http.post<any>(`${this.apiUrl}/Invoice/descargar/607`,data,this.httpOptions);
  }




  //operaciones 606



  GetMyInvoice606(companyId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Invoice/invoice606/${companyId}`);
  }
  GetMy606s(companyId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Invoice/606/${companyId}`);
  }

  createInvoice606(model: InvoiceBill): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/Invoice/invoice606`,
      model,
      this.httpOptions
    );
  }

  Generar606(anomes:string): Observable<any> {
    var company = localStorage.getItem('company') || '';
    var jsonCompany = JSON.parse(company);
    let data={
      companyID:jsonCompany.id,
      anomes:anomes,
      rnc:jsonCompany.rnc
    }
    
    return this.http.post<any>(`${this.apiUrl}/Invoice/606`,data,this.httpOptions);
  }

  descargar606(o606id:number,formato:number): Observable<any> {
    let data={
      O606Id:o606id,
      formato:formato
    }

    return this.http.post<any>(`${this.apiUrl}/Invoice/descargar/606`,data,this.httpOptions);
  }


}
