import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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
  
  public nuevoBanco:Bank ={
    id: 0,
    accountNumber: '',
    name: '',
    bankselectedId: 0,
    companyId: 0
  }
  public bancos:Bank[]=[]

 
  constructor(private bankService:BankService) {
   
  }
  public modal?: Modal; 

  async ngOnInit(): Promise<void> { 
    this.bankService.GetAllBanks().subscribe(
    (response)=>{
      console.log(response.data);
      this.bancos = response.data
    }
   )
  
   
  //  this.bancos.forEach(e=>{
  //   console.log(e);
    
  // })
    
    // const $targetEl = document.getElementById('defaultModal');
    // const options = {
    //   backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
    //   closable: true,
    //   onHide: () => {
    //     console.log('modal is hidden');
    //   },
    //   onShow: () => {
    //     console.log('modal is shown');
    //   },
    //   onToggle: () => {
    //     console.log('modal has been toggled');
    //   },
    // };
    // const instanceOptions = {
    //   id: 'defaultModal',
    //   override: true,
    // };
    // this.modal = new Modal($targetEl, options, instanceOptions); 

  
  }
  asignar(){
    console.log(this.nuevoBanco);
    
  }

  abrirModal() {
    this.modal?.show();
  }

  cerrarModal() {
    this.modal?.hide(); 
  }

 
}
