import { Component, HostListener } from '@angular/core';
import { CreatebankComponent } from '../../modals/createbank/createbank.component';
import { CommonModule } from '@angular/common';
import { BankService } from 'app/services/bank.service';
import { Bank } from 'app/interfaces/bank.interface';
import { initFlowbite } from 'flowbite/lib/esm/components';
import { DeletemodalComponent } from '../common/deletemodal/deletemodal.component';
import { EditbankComponent } from 'app/modals/editbank/editbank.component';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bank',
  standalone: true,
  imports: [CommonModule, CreatebankComponent,DeletemodalComponent,EditbankComponent],
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
  values = '';

  constructor(
    private bankService: BankService,
  ) {}

  async ngOnInit(): Promise<void> {
    initFlowbite();
    var company = localStorage.getItem('company') || '';
    var jsonCompany = JSON.parse(company);

    if (jsonCompany.id) {
      await this.getAllBankByCompany(jsonCompany.id);
      
    }

    
  }

  buscador(valor:any){

    if(valor){
      this.datosPaginados = this.banks.filter(x=>x.accountNumber.toLowerCase().includes(valor.target.value.toLowerCase()))
    }else{

       this.actualizarDatosPaginados()
    } 
  }

  obtenerDatosPaginados(datos: Bank[], pagina: number, tamanoPagina: number): Bank[] {

   this.hasta= Math.min(this.paginaActual * tamanoPagina, this.banks.length)
    const inicio = (pagina - 1) * tamanoPagina;
    const fin = inicio + tamanoPagina;
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

  deleteBank(id:number){
    this.bankService.deleteMyBank(id).subscribe(
      (response) => {
        if (response.success) {
          this.isSuccess = true
          this.mensaje = response.message
          setTimeout(() => {
          this.isSuccess = false 
        }, 3500);

        var company = localStorage.getItem('company') || '';
        var jsonCompany = JSON.parse(company);
    
        if (jsonCompany.id) {
           this.getAllBankByCompany(jsonCompany.id);
          
        }
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

  updateBank(bank:Bank){

         var company = localStorage.getItem('company') || '';
        var jsonCompany = JSON.parse(company);
    
        bank.companyId = jsonCompany.id
    this.bankService.updateMyBank(bank).subscribe(
      (response) => {
        if (response.success) {
          this.isSuccess = true
          this.mensaje = response.message
          setTimeout(() => {
          this.isSuccess = false 
        }, 3500);

        var company = localStorage.getItem('company') || '';
        var jsonCompany = JSON.parse(company);
    
        if (jsonCompany.id) {
           this.getAllBankByCompany(jsonCompany.id);
          
        }
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
