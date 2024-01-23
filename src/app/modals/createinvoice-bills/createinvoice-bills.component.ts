import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvoiceBill } from 'app/interfaces/bill.interface';

@Component({
  selector: 'app-createinvoice-bills',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './createinvoice-bills.component.html',
  styleUrl: './createinvoice-bills.component.css',
})
export class CreateinvoiceBillsComponent {
  @Output() crearFactura: EventEmitter<InvoiceBill> =
    new EventEmitter<InvoiceBill>();
  public bienoservicio =0
  public avanzado = false;
  public newInvoice: InvoiceBill = { 
    id: 0,
    tipoID:0 ,//O
    rncCedulaPasaporte: '' ,//O
    tipoBienesYServiciosComprados: 0,//O
    numeroComprobanteFiscal: '', //O
    numeroComprobanteFiscalModificado: '' ,//N
    fechaComprobante: '', //O
    fechaPago: '', // N
    montoFacturadoEnServicio: 0 ,//O
    montoFacturadoEnBienes: 0 ,//O
    totalMontoFacturado:0, //O
    itbisFacturado: 0, //O,
    itbisRetenido: 0,//N
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
    companyID:0}

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
      id: 1,
      valor: 'Cheque/Tranferencia/Deposito',
    },
    {
      id: 1,
      valor: 'Tarjeta credito/debito',
    },
    {
      id: 1,
      valor: 'Compra a credito',
    },
    {
      id: 1,
      valor: 'Permuta',
    },
    {
      id: 1,
      valor: 'Nota Credito',
    },
    {
      id: 1,
      valor: 'Mixto',
    },
  ];

  create() {
    this.crearFactura.emit(this.newInvoice);
  }
}
