import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvoiceIncome } from 'app/interfaces/income.interface';
import { Modal, Tabs, initFlowbite } from 'flowbite';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-editincome',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editincome.component.html',
  styleUrl: './editincome.component.css'
})
export class EditincomeComponent {
  public uno ='';
  public dos='';
  public tres='';
  @Input() invoiceSelected?: InvoiceIncome;

  @Output() editarFactura: EventEmitter<InvoiceIncome> =
    new EventEmitter<InvoiceIncome>();
  public avanzado = false;
  public invoiceObject: InvoiceIncome = { 
    id: 0,
    rncCedulaPasaporte: '',
    tipoIdentificacion: 0,
    numeroComprobanteFiscal: '',
    numeroComprobanteFiscalModificado: '',
    tipoIngreso: 0,
    fechaComprobante: '',
    fechaRetencion: '',
    montoFacturado: 0,
    itbisFacturado: 0,
    itbisRetenidoporTerceros: 0,
    itbisPercibido: 0,
    retencionRentaporTerceros: 0,
    isrPercibido: 0,
    impuestoSelectivoalConsumo: 0,
    otrosImpuestos_Tasas:0,
    montoPropinaLegal:0,
    efectivo:0,
    cheque_Transferencia_Deposito: 0,
    tarjetaDebito_Credito: 0,
    ventaACredito: 0,
    bonosOCertificadosRegalo: 0,
    permuta:0,
    otrasFormasVentas: 0,
    companyID: 0
    }
  
  public ListaTiposPagos: [] = [];
  public TiposIngresos: any[] = [
    {
      id: 1,
      valor: 'Ingresos Por Operaciones (No financieros)',
    },
    {
      id: 2,
      valor: 'Ingresos Financieros',
    },
    {
      id: 3,
      valor: 'Ingresos Extraordinarios',
    },
    {
      id: 4,
      valor: 'Ingresos Por Arrendamientos',
    },
    {
      id: 5,
      valor: 'Ingresos Por Venta de Activos Depreciable',
    },
    {
      id: 6,
      valor: 'Otros Ingresos',
    }
  ];

  async ngOnInit(): Promise<void> {
    initFlowbite();
    this.uno = uuidv4();
    this.dos = uuidv4()
    this.tres = uuidv4()
    this.invoiceObject = this.invoiceSelected || this.invoiceObject;
    console.log(this.invoiceObject);
  }

  update() {
    this.hidemodal(this.invoiceSelected?.id || 0)
    if (this.invoiceSelected?.rncCedulaPasaporte?.length == 11) {
      this.invoiceSelected.tipoIdentificacion = 2;
    } else if (this.invoiceSelected?.rncCedulaPasaporte?.length == 9) {
      this.invoiceSelected.tipoIdentificacion = 1;
    }
    this.editarFactura.emit(this.invoiceSelected);
  }

  showmodal(id: number) {
    var targetEl = document.getElementById('editbillmodal' + id);

    // options with default values
    const options = {
      backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
      closable: true,
      onHide: () => {},
      onShow: () => {},
      onToggle: () => {},
    };

    // instance options object
    const instanceOptions = {
      id: 'modalEl',
      override: true,
    };
    var modal = new Modal(targetEl, options, instanceOptions);

    // end modal

    this.one()

    modal.show();
  }

  hidemodal(id: number) {
    var targetEl = document.getElementById('editbillmodal' + id);

    // options with default values
    const options = {
      backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
      closable: true,
      onHide: () => {},
      onShow: () => {},
      onToggle: () => {},
    };

    // instance options object
    const instanceOptions = {
      id: 'modalEl',
      override: true,
    };
    var modal = new Modal(targetEl, options, instanceOptions);

    modal.hide();
  }


  one(){
    const tabsElement = document.getElementById('default-tab-content'+this.invoiceSelected?.id);

 
    
    const tabElements = [
      {
        id: 'profile'+this.uno ,
        triggerEl: document.querySelector('#profile-tab') as HTMLElement,
        targetEl: document.querySelector('#profile'+this.uno) as HTMLElement,
      },
      {
        id: 'dashboard'+this.dos ,
        triggerEl: document.querySelector('#dashboard-tab') as HTMLElement,
        targetEl: document.querySelector('#dashboard'+this.dos)  as HTMLElement,
      },
      {
        id: 'settings'+this.tres ,
        triggerEl: document.querySelector('#settings-tab') as HTMLElement,
        targetEl: document.querySelector('#settings'+this.tres) as HTMLElement,
      },
    ];

    // options with default values
    const taboptions = {
      
      activeClasses:
        'text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500',
      inactiveClasses:
        'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300',
      onShow: () => {
        console.log('tab is shown');
      },
    };

    // instance options with default values
    const tabinstanceOptions = {
      id: 'default-tab-content'+this.invoiceSelected?.id,
      override: true,
    };
    const tabs = new Tabs(tabsElement, tabElements, taboptions, tabinstanceOptions);
    tabs.show('profile'+this.uno);
  }
  two(){
    const tabsElement = document.getElementById('default-tab-content'+this.invoiceSelected?.id);

 
    
    const tabElements = [
      {
        id: 'profile'+this.uno ,
        triggerEl: document.querySelector('#profile-tab') as HTMLElement,
        targetEl: document.querySelector('#profile'+this.uno) as HTMLElement,
      },
      {
        id: 'dashboard'+this.dos ,
        triggerEl: document.querySelector('#dashboard-tab') as HTMLElement,
        targetEl: document.querySelector('#dashboard'+this.dos)  as HTMLElement,
      },
      {
        id: 'settings'+this.tres ,
        triggerEl: document.querySelector('#settings-tab') as HTMLElement,
        targetEl: document.querySelector('#settings'+this.tres) as HTMLElement,
      },
    ];

    // options with default values
    const taboptions = {
      
      activeClasses:
        'text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500',
      inactiveClasses:
        'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300',
      onShow: () => {
        console.log('tab is shown');
      },
    };

    // instance options with default values
    const tabinstanceOptions = {
      id: 'default-tab-content'+this.invoiceSelected?.id,
      override: true,
    };
    const tabs = new Tabs(tabsElement, tabElements, taboptions, tabinstanceOptions);
    tabs.show('dashboard'+this.dos);
  }
  three(){
    const tabsElement = document.getElementById('default-tab-content'+this.invoiceSelected?.id);

 
    
    const tabElements = [
      {
        id: 'profile'+this.uno ,
        triggerEl: document.querySelector('#profile-tab') as HTMLElement,
        targetEl: document.querySelector('#profile'+this.uno) as HTMLElement,
      },
      {
        id: 'dashboard'+this.dos ,
        triggerEl: document.querySelector('#dashboard-tab') as HTMLElement,
        targetEl: document.querySelector('#dashboard'+this.dos)  as HTMLElement,
      },
      {
        id: 'settings'+this.tres ,
        triggerEl: document.querySelector('#settings-tab') as HTMLElement,
        targetEl: document.querySelector('#settings'+this.tres) as HTMLElement,
      },
    ];

    // options with default values
    const taboptions = {
      
      activeClasses:
        'text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500',
      inactiveClasses:
        'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300',
      onShow: () => {
        console.log('tab is shown');
      },
    };

    // instance options with default values
    const tabinstanceOptions = {
      id: 'default-tab-content'+this.invoiceSelected?.id,
      override: true,
    };
    const tabs = new Tabs(tabsElement, tabElements, taboptions, tabinstanceOptions);
    tabs.show('settings'+this.tres);
  }
}
