import { Component } from '@angular/core';
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
  selectedDate: Date = new Date();

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
  constructor(private bankService: BankService) {}

  async ngOnInit(): Promise<void> {
    initFlowbite();
    var company = localStorage.getItem('company') || '';
    var jsonCompany = JSON.parse(company);

    if (jsonCompany.id) {
      this.bankService.GetMyBanks(jsonCompany.id).subscribe((response) => {
        console.log(response.data);
        this.mybanks = response.data;
      });
    }
  }


  create(){
   
    console.log('ngmodel ',this.jo);
    var eso = document.getElementById('datepicker')?.ariaValueText

 
  }

  sendValue() {
  
    // Aquí puedes enviar el valor seleccionado al componente
  }

  onChangeDate() {
    console.log('event');
    
  }
}
