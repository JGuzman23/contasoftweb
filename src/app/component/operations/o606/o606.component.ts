import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { InvoiceService } from 'app/services/invoice.service';
import { O606 } from 'app/interfaces/o606.interface';
import { DatePipe, UpperCasePipe} from '@angular/common';
import { Create606Component } from 'app/modals/create606/create606.component';

@Component({
  selector: 'app-o606',
  standalone: true,
  imports: [Create606Component,DatePipe],
  templateUrl: './o606.component.html',
  styleUrl: './o606.component.css'
})
export class O606Component {

  public o606s:O606[]=[]
  constructor(private invoiceService: InvoiceService) {}
  async ngOnInit(): Promise<void> {
    initFlowbite();

    var company = localStorage.getItem('company') || '';
    var jsonCompany = JSON.parse(company);
    if (jsonCompany) {
      
    this.invoiceService.GetMy606s(jsonCompany.id).subscribe(
      (response)=>{
        console.log(response);
        
        this.o606s = response.data
      },(error)=>{

      }
    )
    }
  }
}
