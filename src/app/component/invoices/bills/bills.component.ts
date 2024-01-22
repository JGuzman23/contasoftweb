import { Component } from '@angular/core';
import { CreateinvoiceBillsComponent } from 'app/modals/createinvoice-bills/createinvoice-bills.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-bills',
  standalone: true,
  imports: [CreateinvoiceBillsComponent],
  templateUrl: './bills.component.html',
  styleUrl: './bills.component.css'
})
export class BillsComponent {
  async ngOnInit(): Promise<void> {
    initFlowbite();}
}
