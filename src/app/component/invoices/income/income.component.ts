import { Component } from '@angular/core';
import { CreateinvoiceIncomeComponent } from 'app/modals/createinvoice-income/createinvoice-income.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-income',
  standalone: true,
  imports: [CreateinvoiceIncomeComponent],
  templateUrl: './income.component.html',
  styleUrl: './income.component.css'
})
export class IncomeComponent {
  async ngOnInit(): Promise<void> {
    initFlowbite();}
}
