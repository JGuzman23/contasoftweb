import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvoiceBill } from 'app/interfaces/bill.interface';
import { Modal, Tabs, initFlowbite } from 'flowbite';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-editbill',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editbill.component.html',
})
export class EditbillComponent {

  public uno ='';
  public dos='';
  public tres='';
  @Input() invoiceSelected?: InvoiceBill;

  @Output() editarFactura: EventEmitter<InvoiceBill> =
    new EventEmitter<InvoiceBill>();
  public bienoservicio = 0;
  public avanzado = false;
  public invoiceObject: InvoiceBill = {
    id: 0,
    tipoID: 0, //O
    rncCedulaPasaporte: '', //O
    tipoBienesYServiciosComprados: 0, //O
    numeroComprobanteFiscal: '', //O
    numeroComprobanteFiscalModificado: '', //N
    fechaComprobante: '', //O
    fechaPago: '', // N
    montoFacturadoEnServicio: 0, //O
    montoFacturadoEnBienes: 0, //O
    totalMontoFacturado: 0, //O
    itbisFacturado: 0, //O,
    itbisRetenido: 0, //N
    itbisSujetoaProporcionalidad: 0,
    itbisLlevadoAlCosto: 0,
    itbisPorAdelantar: 0,
    itbisPersividoEnCompras: 0,
    tipoRetencionEnISR: 0,
    montoRetencionRenta: 0,
    irsPercibidoEnCompras: 0,
    impuestoSelectivoAlConsumo: 0,
    otrosImpuestosTasa: 0,
    montoPropinaLegal: 0,
    formaDePago: 0,
    companyID: 0,
  };
  public ListaTiposPagos: [] = [];
  public ListTipoBienesyServicios: any[] = [
    {
      id: 1,
      valor: 'Gastos de personal',
    },
    {
      id: 2,
      valor: 'Gastos por trabajo, suministro o servicios',
    },
    {
      id: 3,
      valor: 'Arrendamientos',
    },
    {
      id: 4,
      valor: 'Gastos activo fijo',
    },
    {
      id: 5,
      valor: 'Gastos de representacion',
    },
    {
      id: 6,
      valor: 'Otras deducciones administrativas',
    },
    {
      id: 7,
      valor: 'Gastos financieros',
    },
    {
      id: 8,
      valor: 'Gastos extraordinarios',
    },
    {
      id: 9,
      valor: 'Compras y gastos que forman parte del costo de venta',
    },
    {
      id: 10,
      valor: 'Aquisiciones de activos',
    },
    {
      id: 11,
      valor: 'Gastos de seguros',
    },
  ];

  public FormaPago: any[] = [
    {
      id: 1,
      valor: 'Efectivo',
    },
    {
      id: 2,
      valor: 'Cheque/Tranferencia/Deposito',
    },
    {
      id: 3,
      valor: 'Tarjeta credito/debito',
    },
    {
      id: 4,
      valor: 'Compra a credito',
    },
    {
      id: 5,
      valor: 'Permuta',
    },
    {
      id: 6,
      valor: 'Nota Credito',
    },
    {
      id: 7,
      valor: 'Mixto',
    },
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
      this.invoiceSelected.tipoID = 2;
    } else if (this.invoiceSelected?.rncCedulaPasaporte?.length == 9) {
      this.invoiceSelected.tipoID = 1;
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
