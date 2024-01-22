import { Component } from '@angular/core';
import { CreateconciliacionComponent } from '../../../modals/createconciliacion/createconciliacion.component';
import { Transaction } from 'app/interfaces/transaction.interface';
import { TransactionService } from 'app/services/transaction.service';
import { CommonModule } from '@angular/common';
import { initFlowbite } from 'flowbite'



@Component({
  selector: 'app-conciliacion',
  standalone: true,
  imports: [CreateconciliacionComponent,CommonModule],
  templateUrl: './conciliacion.component.html',
  styleUrl: './conciliacion.component.css'
})
export class ConciliacionComponent {

  /**
   *
   */
  constructor(private transactionService: TransactionService) {
    
    
  }
  public Transactions: Transaction[]=[]
  public total =0

  async ngOnInit(): Promise<void> { 
    initFlowbite();
    var company = localStorage.getItem('company') || ''
    var jsonCompany = JSON.parse(company)
  
    if(jsonCompany.id){
      this.getAllTransactionByCompany(jsonCompany.id)
    }
  }

  getAllTransactionByCompany(companyId: number){

    this.transactionService.Get(companyId).subscribe(
      (response) => {
       
        
        // Manejar la respuesta de la solicitud HTTP aquí
        this.Transactions = response.data

        for (let index = this.Transactions.length - 1; index >= 0; index--) {
          const t = this.Transactions[index];
      
          if (t.tipo === "debito") {
              this.total -= t.amount;
          } else {
              this.total += t.amount;
          }
      
          // Actualizar la propiedad `total` en cada objeto de transacción
          this.Transactions[index].total = this.total;
      }
      },
      (error) => {
        // Manejar errores aquí
        console.error('Error al obtener la compañía:', error);
      }
    );
   }
}
