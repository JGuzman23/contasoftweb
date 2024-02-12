import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VoidInvoice } from 'app/interfaces/void.interface';
import { Modal, initFlowbite } from 'flowbite';

@Component({
  selector: 'app-voidinvoice',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './voidinvoice.component.html',
  styleUrl: './voidinvoice.component.css'
})
export class VoidinvoiceComponent {

  @Output() anular: EventEmitter<VoidInvoice> = new EventEmitter<VoidInvoice>();
  @Input() id?: number | 0

  public voidInvoice: VoidInvoice = { 
    tipo:0,
    invoiceId:0,
    comment:'',
    CompanyId: 0
   };

   public TipoAnulacion :any[]=[{
    id:1, valor:'01 Deterioro de Factura Pre-Impresa'
   },{
    id:2, valor:'02 Errores de Impresión (Factura Pre-Impresa)'
   },{
    id:3, valor:'03 Impresión Defectuosa'
   },{
    id:4, valor:'04 Corrección de la Información'
   },{
    id:5, valor:'05 Cambio de Productos'
   },{
    id:6, valor:'06 Devolución de Productos'
   },{
    id:7, valor:'07 Omisión de Productos'
   },{
    id:8, valor:'08 Errores en Secuencia de NCF'
   },{
    id:9, valor:'09 Por Cese de operaciones'
   },{
    id:10, valor:'10 Perdida o Hurto de Talonario(S)'
   },]
  

  async ngOnInit(): Promise<void> { 
    initFlowbite();
   


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

  AnularInvoice(){
    
    this.hidemodal(this.id! )
    this.voidInvoice.invoiceId = this.id!
    this.anular.emit(this.voidInvoice);
  }
}
