import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ClientsComponent } from '../clients/clients.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header-sidebar',
  standalone: true,
  imports: [RouterOutlet,CommonModule,ClientsComponent],
  templateUrl: './header-sidebar.component.html',
  styleUrl: './header-sidebar.component.css'
})
export class HeaderSidebarComponent {

  alerta(){
    console.log('hola mundo')
  }
}
