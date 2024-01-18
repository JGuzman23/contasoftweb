import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-bills',
  standalone: true,
  imports: [],
  templateUrl: './bills.component.html',
  styleUrl: './bills.component.css'
})
export class BillsComponent {
  async ngOnInit(): Promise<void> {
    initFlowbite();}
}
