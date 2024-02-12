import { Component } from '@angular/core';
import { DeletemodalComponent } from 'app/component/common/deletemodal/deletemodal.component';
import { InvoiceIncome } from 'app/interfaces/income.interface';
import { VoidInvoice } from 'app/interfaces/void.interface';
import { CreateinvoiceIncomeComponent } from 'app/modals/createinvoice-income/createinvoice-income.component';
import { EditincomeComponent } from 'app/modals/editincome/editincome.component';
import { VoidinvoiceComponent } from 'app/modals/voidinvoice/voidinvoice.component';
import { InvoiceService } from 'app/services/invoice.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-income',
  standalone: true,
  imports: [CreateinvoiceIncomeComponent,EditincomeComponent,DeletemodalComponent,VoidinvoiceComponent],
  templateUrl: './income.component.html',
  styleUrl: './income.component.css'
})
export class IncomeComponent {
  public incomes : InvoiceIncome[]=[]
  public isError: boolean = false
  public isSuccess: boolean = false
  public mensaje =''
  datosPaginados: InvoiceIncome[] = [];
  paginaActual = 1;
  tamanoPagina = 8;
  hasta =0
  constructor(private invoiceService: InvoiceService) {}

  async ngOnInit(): Promise<void> {
    initFlowbite();
    this.getAllInvoiceByCompany()
    
  }

  getAllInvoiceByCompany(){

    var company = localStorage.getItem('company') || '';
    var jsonCompany = JSON.parse(company);
    if (jsonCompany) {
      
    this.invoiceService.GetMyInvoice607(jsonCompany.id).subscribe(
      (response)=>{
        console.log(response);
        this.incomes = response.data
        this.incomes = this.incomes.sort((a, b)=> a.id - b.id )
        this.actualizarDatosPaginados()
      },(error)=>{

      }
    )
    }
  }
  obtenerDatosPaginados(datos: InvoiceIncome[], pagina: number, tamanoPagina: number): InvoiceIncome[] {

    this.hasta= Math.min(this.paginaActual * tamanoPagina, this.incomes.length)
     const inicio = (pagina - 1) * tamanoPagina;
     const fin = inicio + tamanoPagina;
     return datos.slice(inicio, fin);
   }
 
   async actualizarDatosPaginados() {
     this.datosPaginados = this.obtenerDatosPaginados(
       this.incomes,
       this.paginaActual,
       this.tamanoPagina
     );
   }
   cambiarPagina(pagina: number) {
     this.paginaActual = pagina;
     this.actualizarDatosPaginados();
   }

  crear(model: InvoiceIncome) {
   
    var company = localStorage.getItem('company') || '';
    var jsonCompany = JSON.parse(company);
    if (jsonCompany) {
      model.companyID = jsonCompany.id;
      this.invoiceService.createInvoice607(model).subscribe(
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
  deleteInvoice(billId: number) {
    this.invoiceService.deleteInvoiceIncome(billId).subscribe(
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

  anularInvoice(voidinvoice: VoidInvoice){

    var company = localStorage.getItem('company') || '';
    var jsonCompany = JSON.parse(company);
    if (jsonCompany) {
      voidinvoice.CompanyId = jsonCompany.id
    }
    this.invoiceService.anular(voidinvoice).subscribe(
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

  actualizar(model : InvoiceIncome){

    var company = localStorage.getItem('company') || '';
    var jsonCompany = JSON.parse(company);
    if (jsonCompany) {
      model.companyID = jsonCompany.id;
       this.invoiceService.updateInvoice607(model).subscribe(
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
