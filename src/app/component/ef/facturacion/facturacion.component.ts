import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-facturacion',
  standalone: true,
  imports: [],
  templateUrl: './facturacion.component.html',
  styleUrl: './facturacion.component.css'
})
export class FacturacionComponent {
  async ngOnInit(): Promise<void> {
    initFlowbite();}
}
