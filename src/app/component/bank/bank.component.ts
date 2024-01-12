import { Component } from '@angular/core';
import { CreatebankComponent } from '../../modals/createbank/createbank.component';

@Component({
  selector: 'app-bank',
  standalone: true,
  imports: [CreatebankComponent],
  templateUrl: './bank.component.html',
  styleUrl: './bank.component.css'
})
export class BankComponent {

}
