import { Component } from '@angular/core';
import { CreatebankComponent } from '../../modals/createbank/createbank.component';
import { CommonModule } from '@angular/common';
import { BankService } from 'app/services/bank.service';
import { Bank } from 'app/interfaces/bank.interface';
import { initFlowbite } from 'flowbite'


@Component({
  selector: 'app-bank',
  standalone: true,
  imports: [CommonModule,CreatebankComponent],
  templateUrl: './bank.component.html',
  styleUrl: './bank.component.css'
})
export default class BankComponent {

public banks: Bank[]=[]
public ListaDeBancos: Bank[]=[]


 constructor(private bankService:BankService) {
  
 }

 async ngOnInit(): Promise<void> { 
  initFlowbite()
  var company = localStorage.getItem('company') || ''
  var jsonCompany = JSON.parse(company)

  if(jsonCompany.id){
    this.getAllBankByCompany(jsonCompany.id)
  }

  // this.ListaDeBancos = await this.bankService.getAllBanks()

  // await this.bankService.GetAllBanks().subscribe((response) => {
     
  //   this.ListaDeBancos = response.data
  // },
  // (error) => {
  //   // Manejar errores aquí
  //   console.error('Error al obtener la compañía:', error);
  // }
//);
  
}


 getAllBankByCompany(companyId: number){

  this.bankService.Get(companyId).subscribe(
    (response) => {
     
      
      // Manejar la respuesta de la solicitud HTTP aquí
      this.banks = response.data
    },
    (error) => {
      // Manejar errores aquí
      console.error('Error al obtener la compañía:', error);
    }
  );
 }
  
}
