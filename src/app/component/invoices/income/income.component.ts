import { Component } from '@angular/core';
import { InvoiceIncome } from 'app/interfaces/income.interface';
import { CreateinvoiceIncomeComponent } from 'app/modals/createinvoice-income/createinvoice-income.component';
import { InvoiceService } from 'app/services/invoice.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-income',
  standalone: true,
  imports: [CreateinvoiceIncomeComponent],
  templateUrl: './income.component.html',
  styleUrl: './income.component.css'
})
export class IncomeComponent {
  public incomes : InvoiceIncome[]=[]
  public isError: boolean = false
  public isSuccess: boolean = false
  public mensaje =''
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
      },(error)=>{

      }
    )
    }
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
}
