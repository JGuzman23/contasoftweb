import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  async ngOnInit(): Promise<void> {
    initFlowbite();}
}
