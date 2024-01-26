import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InvoiceBill } from 'app/interfaces/bill.interface';
import { Create606Component } from 'app/modals/create606/create606.component';
import { CreateinvoiceBillsComponent } from 'app/modals/createinvoice-bills/createinvoice-bills.component';
import { InvoiceService } from 'app/services/invoice.service';

import { initFlowbite,initModals } from 'flowbite';

@Component({
  selector: 'app-bills',
  standalone: true,
  imports: [CreateinvoiceBillsComponent, CommonModule],
  templateUrl: './bills.component.html',
  styleUrl: './bills.component.css',
})
export class BillsComponent {
  
  
  public bills : InvoiceBill[]=[]
  public isError: boolean = false
  public isSuccess: boolean = false
  public mensaje =''

  mostrarModal: boolean = false;
  constructor(private invoiceService: InvoiceService) {}

  async ngOnInit(): Promise<void> {
    
    this.getAllInvoiceByCompany()
    initFlowbite();
    initModals();
    
  }

  

  toggleModal(billId: number) {
    this.mostrarModal = !this.mostrarModal;


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
          
          if (response.success) {
            this.isSuccess = true
            this.mensaje = response.message
            setTimeout(() => {
            this.isSuccess = false 
          }, 3500);
  
          this.getAllInvoiceByCompany()
          }else{
            this.isError = true
            this.mensaje = response.message
            setTimeout(() => {
            this.isError = false 
          }, 3500);
          }
          
        },
        (error) => {
          console.log(error);
          
        }
      );
    }
  }
}
