import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { routes } from 'app/app.routes';
import { initFlowbite } from 'flowbite';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule,HeaderComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor() {
    
    
  }
  async ngOnInit(): Promise<void> {
    initFlowbite();}

}
