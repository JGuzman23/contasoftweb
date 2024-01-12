import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderSidebarComponent } from './component/header-sidebar/header-sidebar.component';
import { RegisterComponent } from './component/auth/register/register.component';
import { initFlowbite } from 'flowbite';
import { LoginComponent } from './component/auth/login/login.component';
import { routes } from './app.routes';
import { HomeComponent } from './component/home/home.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderSidebarComponent,RegisterComponent,LoginComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'contasoft';

  ngOnInit(): void {
    initFlowbite();
  }
}
