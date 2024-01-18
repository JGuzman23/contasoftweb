import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-income',
  standalone: true,
  imports: [],
  templateUrl: './income.component.html',
  styleUrl: './income.component.css'
})
export class IncomeComponent {
  async ngOnInit(): Promise<void> {
    initFlowbite();}
}
