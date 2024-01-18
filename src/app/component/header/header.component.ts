import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  public companyName=''
  async ngOnInit(): Promise<void> { 
  
      initFlowbite();
  var company = localStorage.getItem('company') || ''
  var jsonCompany = JSON.parse(company)

  if(jsonCompany.name){
    this.companyName = jsonCompany.name
  }
}
}
