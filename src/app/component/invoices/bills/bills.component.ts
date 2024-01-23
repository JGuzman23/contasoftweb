import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InvoiceBill } from 'app/interfaces/bill.interface';
import { CreateinvoiceBillsComponent } from 'app/modals/createinvoice-bills/createinvoice-bills.component';
import { InvoiceService } from 'app/services/invoice.service';
import { error, log } from 'console';
import { response } from 'express';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-bills',
  standalone: true,
  imports: [CreateinvoiceBillsComponent, CommonModule],
  templateUrl: './bills.component.html',
  styleUrl: './bills.component.css',
})
export class BillsComponent {
  
  
  public bills : InvoiceBill[]=[]
  constructor(private invoiceService: InvoiceService) {}

  async ngOnInit(): Promise<void> {
    initFlowbite();
    this.getAllInvoiceByCompany()
    
  }

  getAllInvoiceByCompany(){

    var company = localStorage.getItem('company') || '';
    var jsonCompany = JSON.parse(company);
    if (jsonCompany) {
      
    this.invoiceService.GetMyInvoice606(jsonCompany.id).subscribe(
      (response)=>{
        console.log(response);
        this.bills = response.data
      },(error)=>{

      }
    )
    }
  }

  crear(model: InvoiceBill) {
   
    var company = localStorage.getItem('company') || '';
    var jsonCompany = JSON.parse(company);
    if (jsonCompany) {
      model.companyID = jsonCompany.id;
      this.invoiceService.createInvoice606(model).subscribe(
        (response) => {
          
          this.getAllInvoiceByCompany()
        },
        (error) => {
          console.log(error);
          
        }
      );
    }
  }
}
