import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DatepickerdualComponent } from 'app/component/common/datepickerdual/datepickerdual.component';
import { DeletemodalComponent } from 'app/component/common/deletemodal/deletemodal.component';
import { InvoiceBill } from 'app/interfaces/bill.interface';
import { Create606Component } from 'app/modals/create606/create606.component';
import { CreateinvoiceBillsComponent } from 'app/modals/createinvoice-bills/createinvoice-bills.component';
import { EditbillComponent } from 'app/modals/editbill/editbill.component';
import { InvoiceService } from 'app/services/invoice.service';

import { initFlowbite,initModals } from 'flowbite';

@Component({
  selector: 'app-bills',
  standalone: true,
  imports: [CreateinvoiceBillsComponent, CommonModule,EditbillComponent,DeletemodalComponent,DatepickerdualComponent],
  templateUrl: './bills.component.html',
  styleUrl: './bills.component.css',
})
export class BillsComponent {
  
  
  public bills : InvoiceBill[]=[]
  public isError: boolean = false
  public isSuccess: boolean = false
  public mensaje =''
  datosPaginados: InvoiceBill[] = [];
  paginaActual = 1;
  tamanoPagina = 8;
  hasta =0

  mostrarModal: boolean = false;
  constructor(private invoiceService: InvoiceService) {}

  async ngOnInit(): Promise<void> {
    
    this.getAllInvoiceByCompany()
    initFlowbite();
    initModals();
    
  }

  obtenerDatosPaginados(datos: InvoiceBill[], pagina: number, tamanoPagina: number): InvoiceBill[] {

    this.hasta= Math.min(this.paginaActual * tamanoPagina, this.bills.length)
     const inicio = (pagina - 1) * tamanoPagina;
     const fin = inicio + tamanoPagina;
     return datos.slice(inicio, fin);
   }
 
   async actualizarDatosPaginados() {
     this.datosPaginados = this.obtenerDatosPaginados(
       this.bills,
       this.paginaActual,
       this.tamanoPagina
     );
   }
   cambiarPagina(pagina: number) {
     this.paginaActual = pagina;
     this.actualizarDatosPaginados();
   }
 

  

  deleteInvoice(billId: number) {
    this.invoiceService.deleteInvoiceBill(billId).subscribe(
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
        
        this.isError = true
          this.mensaje = error.message
          setTimeout(() => {
          this.isError = false 
        }, 3500);
       
      }
    );


  }

  getAllInvoiceByCompany(){

    var company = localStorage.getItem('company') || '';
    var jsonCompany = JSON.parse(company);
    if (jsonCompany) {
      
    this.invoiceService.GetMyInvoice606(jsonCompany.id).subscribe(
      (response)=>{
        console.log(response);
        this.bills = response.data
        this.bills = this.bills.sort((a, b)=> a.id - b.id )
        this.actualizarDatosPaginados()
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

  actualizar(model : InvoiceBill){

    var company = localStorage.getItem('company') || '';
    var jsonCompany = JSON.parse(company);
    if (jsonCompany) {
      model.companyID = jsonCompany.id;
       this.invoiceService.updateInvoice606(model).subscribe(
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
        
        this.isError = true
          this.mensaje = error.message
          setTimeout(() => {
          this.isError = false 
        }, 3500);
       
      }
    );
    }
    
  }
}
