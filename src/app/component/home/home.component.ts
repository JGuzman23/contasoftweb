import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CreatecompanyComponent } from '../../modals/createcompany/createcompany.component';
import { CompanyService } from 'app/services/company.service';
import { Company } from 'app/interfaces/company.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { response } from 'express';
import { error, log } from 'console';
import { Modal, initFlowbite } from 'flowbite';
import { Router } from '@angular/router';
import { Location, PlatformLocation } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,CreatecompanyComponent,FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 

  public companies: Company[]=[]

  constructor(private companyService: CompanyService, private router:Router) {
   
  }

  async ngOnInit(): Promise<void> { 

    
      initFlowbite();
      if (typeof localStorage !== 'undefined') {
    localStorage.setItem('company', "")
      }
    this.getCompanies(1)

    
  }


  getCompanies(userId:number){
     this.companyService.Get(userId)
    .subscribe(
      (response) => {
    
        this.companies = response.data
      },
      (error) => {
        // Manejar errores aquí
        console.error('Error al obtener la compañía:', error);
      }
    );
  }
  createCompanyasync(model:Company){

    this.companyService.create(model).subscribe(
      (response) =>{
        this.getCompanies(1)
       
     
      },
      (error) => {
        
        console.error('Error al obtener la compañía:', error);
      }
    )
  }

  ir(company:Company){
    localStorage.setItem('company', JSON.stringify(company))
    this.router.navigateByUrl('/dashboard')
    // const baseUrl= this.location.path();
    // const dashboardUrl = `${baseUrl}/dashboard`;
    
    // // Redirigir a la URL completa
    // window.location.href = dashboardUrl;
  }
}
