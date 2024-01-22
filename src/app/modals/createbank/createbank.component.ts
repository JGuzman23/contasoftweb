import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Bank } from 'app/interfaces/bank.interface';
import { BankService } from 'app/services/bank.service';
import { Modal } from 'flowbite';


@Component({
  selector: 'app-createbank',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './createbank.component.html',
  styleUrl: './createbank.component.css',
})
export class CreatebankComponent {
  @Output() createBank: EventEmitter<Bank> = new EventEmitter<Bank>();

  public nuevoBanco:Bank ={
    id: 0,
    accountNumber: '',
    name: '',
    bankselectedId: 0,
    companyId: 0
  }
  public bancos:Bank[]=[]

 
  constructor(private bankService:BankService,) {
   
  }
  public modal?: Modal; 

  async ngOnInit(): Promise<void> { 
 
    this.getAllBanks()
  }
  getAllBanks(){
    this.bankService.GetAllBanks().subscribe(
      (response)=>{
       
        this.bancos = response.data
      }
     )
  }

  asignar(){

    this.createBank.emit(this.nuevoBanco)
  }

  abrirModal() {
    this.modal?.show();
  }

  cerrarModal() {
    this.modal?.hide(); 
  }

 
}
