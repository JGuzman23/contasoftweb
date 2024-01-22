import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Invoice } from 'app/interfaces/bill.interface';

@Component({
  selector: 'app-createinvoice-bills',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './createinvoice-bills.component.html',
  styleUrl: './createinvoice-bills.component.css'
})
export class CreateinvoiceBillsComponent {


  public newInvoice: Invoice ={
    rnc_cliente :'',
    rnc :'',
    ncf:'',
    fecha:'',
    monto:0,
    itbis:0,
    tipoPago:0
  }
  public ListaTiposPagos:[] =[]
  

  create(){
    console.log(this.newInvoice);
    
  }
}
