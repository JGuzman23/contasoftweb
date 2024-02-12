import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-datepickerdual',
  standalone: true,
  imports: [],
  templateUrl: './datepickerdual.component.html',
  styleUrl: './datepickerdual.component.css'
})
export class DatepickerdualComponent {

  async ngOnInit(): Promise<void> {
    
    
    initFlowbite();
  
    
  }
}
