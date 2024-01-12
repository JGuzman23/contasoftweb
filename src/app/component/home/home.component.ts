import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CreatecompanyComponent } from '../../modals/createcompany/createcompany.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,CreatecompanyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
