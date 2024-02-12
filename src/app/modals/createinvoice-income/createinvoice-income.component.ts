import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvoiceIncome } from 'app/interfaces/income.interface';

@Component({
  selector: 'app-createinvoice-income',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './createinvoice-income.component.html',
  styleUrl: './createinvoice-income.component.css'
})
export class CreateinvoiceIncomeComponent {

  @Output() crearFactura: EventEmitter<InvoiceIncome> =
  new EventEmitter<InvoiceIncome>();
public bienoservicio =0
public avanzado = false;
public newInvoice: InvoiceIncome = { 
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



create() {
  if(this.newInvoice.rncCedulaPasaporte?.length ==11){
    this.newInvoice.tipoIdentificacion =2
  }else if(this.newInvoice.rncCedulaPasaporte?.length ==9){
    this.newInvoice.tipoIdentificacion =1
  }
  console.log(this.newInvoice);
  
  this.crearFactura.emit(this.newInvoice);
}
}
