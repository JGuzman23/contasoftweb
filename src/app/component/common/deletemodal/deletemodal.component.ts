import { Component, EventEmitter, Input, Output } from '@angular/core';
import { initFlowbite } from 'flowbite/lib/esm/components';
import { Modal } from 'flowbite';

@Component({
  selector: 'app-deletemodal',
  standalone: true,
  imports: [],
  templateUrl: './deletemodal.component.html',
  styleUrl: './deletemodal.component.css',
})
export class DeletemodalComponent {
  @Input() index: number = 0;
  @Input() mensaje: string = '';

  @Output() eliminar: EventEmitter<number> = new EventEmitter<number>();

  async ngOnInit(): Promise<void> {
    initFlowbite();
  }

  showmodal(id :number) {
    var targetEl = document.getElementById('deleteModal'+id);
   
    
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
    var targetEl = document.getElementById('deleteModal'+id);
  
    
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

  eliminarBTN(){
    this.hidemodal(this.index)
    this.eliminar.emit(this.index)
  }
  

  
}
