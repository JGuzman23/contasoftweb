import { Component } from '@angular/core';
import { CreatebankComponent } from '../../modals/createbank/createbank.component';
import { CommonModule } from '@angular/common';
import { BankService } from 'app/services/bank.service';
import { Bank } from 'app/interfaces/bank.interface';
import { initFlowbite } from 'flowbite';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bank',
  standalone: true,
  imports: [CommonModule, CreatebankComponent],
  templateUrl: './bank.component.html',
  styleUrl: './bank.component.css',
})
export default class BankComponent {
  public banks: Bank[] = [];
  public ListaDeBancos: Bank[] = [];
  public isError: boolean = false
  public isSuccess: boolean = false
  public mensaje =''
  

  datosPaginados: Bank[] = [];
  paginaActual = 1;
  tamanoPagina = 8;
  hasta =0

  constructor(
    private bankService: BankService,
    // private toastr: ToastrService
  ) {}

  async ngOnInit(): Promise<void> {
    initFlowbite();
    var company = localStorage.getItem('company') || '';
    var jsonCompany = JSON.parse(company);

    if (jsonCompany.id) {
      await this.getAllBankByCompany(jsonCompany.id);
      
    }

    
  }

  obtenerDatosPaginados(datos: Bank[], pagina: number, tamanoPagina: number): Bank[] {

   this.hasta= Math.min(this.paginaActual * tamanoPagina, this.banks.length)
    const inicio = (pagina - 1) * tamanoPagina;
    const fin = inicio + tamanoPagina;
    console.log(datos);
    
    return datos.slice(inicio, fin);
    
  }

  async actualizarDatosPaginados() {
    
    this.datosPaginados = this.obtenerDatosPaginados(
      this.banks,
      this.paginaActual,
      this.tamanoPagina
    );
   
    
  }
  cambiarPagina(pagina: number) {
    this.paginaActual = pagina;
    this.actualizarDatosPaginados();
  }

  async getAllBankByCompany(companyId: number) {
     (await this.bankService.Get(companyId)).subscribe(
      (response) => {
        
        this.banks = response.data;
         this.actualizarDatosPaginados()
      },
      (error) => {
        
        console.error('Error al obtener la compañía:', error);
      }
    );
  }

  createBankAsync(model: Bank) {
    var company = localStorage.getItem('company') || '';
    var jsonCompany = JSON.parse(company);
    if (jsonCompany) {
      model.companyId = jsonCompany.id;
      this.bankService.asingnar(model).subscribe(
        (response) => {
          if (response.success) {
            this.isSuccess = true
            this.mensaje = response.message
            setTimeout(() => {
            this.isSuccess = false 
          }, 3500);

            this.getAllBankByCompany(jsonCompany.id);
          }else{
            this.isError = true
            this.mensaje = response.message
            setTimeout(() => {
            this.isError = false 
          }, 3500);
          }
        },
        (error) => {
          
          this.isError = true
            this.mensaje = error.message
            setTimeout(() => {
            this.isError = false 
          }, 3500);
         
        }
      );
    }
  }
}
