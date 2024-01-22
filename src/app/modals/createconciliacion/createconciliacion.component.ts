import { Component, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Bank } from 'app/interfaces/bank.interface';
import { Transaction } from 'app/interfaces/transaction.interface';
import { BankService } from 'app/services/bank.service';
import { initFlowbite } from 'flowbite'



@Component({
  selector: 'app-createconciliacion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './createconciliacion.component.html',
  styleUrl: './createconciliacion.component.css',
})
export class CreateconciliacionComponent {
  public mybanks: Bank[] = [];
  public jo:[]=[]
  public selectedDate?: string 


  public newTransaction: Transaction = {
    id: 0,
    bankNumberOut: '',
    bankNumberIn: '',
    amount: 0,
    noCheck: '',
    concept: '',
    tipo: '',
    transactionDate: '',
    companyId: 0,
    total: 0,
  };
  constructor(private bankService: BankService,private elementRef: ElementRef) {}

  async ngOnInit(): Promise<void> {
    initFlowbite();

   
    var company = localStorage.getItem('company') || '';
    var jsonCompany = JSON.parse(company);

    if (jsonCompany.id) {
      this.bankService.GetMyBanks(jsonCompany.id).subscribe((response) => {
        
        this.mybanks = response.data;
      });
    }
  }


  create(){
   
    console.log(this.selectedDate);
    
    var eso = document.getElementById('datepicker')
    
    const datepickerElement = this.elementRef.nativeElement.querySelector('.datepicker input').value;
    console.log(datepickerElement);
   
 
  }

  sendValue() {
  
    // Aquí puedes enviar el valor seleccionado al componente
  }

  onChangeDate() {
   
    
  }
}
