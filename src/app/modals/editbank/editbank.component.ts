import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Bank } from 'app/interfaces/bank.interface';
import { Modal, initFlowbite } from 'flowbite';

@Component({
  selector: 'app-editbank',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editbank.component.html',
  styleUrl: './editbank.component.css'
})
export class EditbankComponent {

  @Output() editBank: EventEmitter<Bank> = new EventEmitter<Bank>();
  @Input() bankSelected?: Bank | null

  public EditBank: Bank = { id: 0, accountNumber: '', name: '', bankSelectedID: 0, companyId: 0 };

  async ngOnInit(): Promise<void> { 
    initFlowbite();
    this.EditBank = this.bankSelected || this.EditBank; // Use bankSelected if not null, otherwise keep the default value


  }

  showmodal(id :number) {
    var targetEl = document.getElementById('editBankModal'+id);
   
    
    // options with default values
    const options = {
     
      
      backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
      closable: true,
      onHide: () => {
      },
      onShow: () => {
      },
      onToggle: () => {
      },
    };

    // instance options object
    const instanceOptions = {
      id: 'modalEl',
      override: true,
    };
    var modal = new Modal(targetEl, options, instanceOptions);

    
      modal.show();
  
    
   
  }

  hidemodal(id :number) {
    var targetEl = document.getElementById('editBankModal'+id);
    
    // options with default values
    const options = {
     
      
      backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
      closable: true,
      onHide: () => {
      },
      onShow: () => {
      },
      onToggle: () => {
      },
    };

    // instance options object
    const instanceOptions = {
      id: 'modalEl',
      override: true,
    };
    var modal = new Modal(targetEl, options, instanceOptions);

    
      modal.hide();
  
    
   
  }

  update(){
    
    this.hidemodal(this.EditBank.bankSelectedID)
    this.editBank.emit(this.EditBank);
  }

}


