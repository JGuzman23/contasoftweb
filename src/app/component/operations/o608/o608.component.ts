import { Component } from '@angular/core';
import { O608 } from 'app/interfaces/o608.interface';
import { Create608Component } from 'app/modals/create608/create608.component';
import { InvoiceService } from 'app/services/invoice.service';
import FileSaver from 'file-saver';
import { initFlowbite } from 'flowbite';
import { DatePipe, UpperCasePipe} from '@angular/common';


@Component({
  selector: 'app-o608',
  standalone: true,
  imports: [Create608Component,DatePipe],
  templateUrl: './o608.component.html',
  styleUrl: './o608.component.css'
})
export class O608Component {
  public o608s:O608[]=[]
  public isError: boolean = false
  public isSuccess: boolean = false
  public mensaje =''
  public jsonCompany:any

  constructor(private invoiceService: InvoiceService) {}

  datosPaginados: O608[] = [];
  paginaActual = 1;
  tamanoPagina = 8;
  hasta =0
  async ngOnInit(): Promise<void> {
    initFlowbite();

    this.getAll608();
  
  }

  obtenerDatosPaginados(datos: O608[], pagina: number, tamanoPagina: number): O608[] {

    this.hasta= Math.min(this.paginaActual * tamanoPagina, this.o608s.length)
     const inicio = (pagina - 1) * tamanoPagina;
     const fin = inicio + tamanoPagina;
     console.log(datos);
     
     return datos.slice(inicio, fin);
     
   }
 
   async actualizarDatosPaginados() {
    
     
     this.datosPaginados = this.obtenerDatosPaginados(
       this.o608s,
       this.paginaActual,
       this.tamanoPagina
     );
    
     
   }
   cambiarPagina(pagina: number) {
     this.paginaActual = pagina;
     this.actualizarDatosPaginados();
   }

  getAll608(){
    var company = localStorage.getItem('company') || '';
    this.jsonCompany = JSON.parse(company);
    if (this.jsonCompany) {
      
    this.invoiceService.GetMy608s(this.jsonCompany.id).subscribe(
      (response)=>{
        console.log(response.data);
        
        this.o608s = response.data
        this.actualizarDatosPaginados()
        
      },(error)=>{

      }
    )
    }
  }


  Generar608(anomes:string){
    this.invoiceService.Generar608(anomes).subscribe(
      (response)=>{
        
        if (response.success) {
          this.isSuccess = true
          this.mensaje = response.message
          setTimeout(() => {
          this.isSuccess = false 
        }, 3500);

        this.getAll608();
        }else{
          this.isError = true
          this.mensaje = response.message
          setTimeout(() => {
          this.isError = false 
        }, 3500);
        }
        
      },(error)=>{

      }
    )

  }
  descargarxlsx608(id:number,formato:number){

    console.log('el id',id);
    
    this.invoiceService.descargar608(id,formato).subscribe(
      (response)=>{
        console.log(response);
        
        const blob = this.b64toBlob(response.data.fileContents, response.data.contentType);

    // Crear un URL para el Blob
    const blobUrl = URL.createObjectURL(blob);

    // Crear un enlace y descargar el archivo
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = response.data.fileDownloadName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);


         
            if (response.success) {
              this.isSuccess = true
              this.mensaje = response.message
              setTimeout(() => {
              this.isSuccess = false 
            }, 3500);
    
            
            }else{
              this.isError = true
              this.mensaje = response.message
              setTimeout(() => {
              this.isError = false 
            }, 3500);
            }
      },(error)=>{
        console.log(error);
        
      }
    )
  }

   b64toBlob(b64Data:any, contentType='', sliceSize=512) {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, {type: contentType});
}
  descargartxt608(id:number,formato:number,anomes:string){

    this.invoiceService.descargar608(id,formato).subscribe(
      (response)=>{
        const contenido = response.data;

        // Crear un Blob (Binary Large Object) con el contenido del archivo y el tipo MIME
        const blob = new Blob([contenido], { type: 'text/plain;charset=utf-8' });
    console.log(blob);
    
        // Utilizar FileSaver para guardar el Blob como un archivo
        FileSaver.saveAs(blob, `608-${this.jsonCompany.name}- ${anomes}.txt`);

        if (response.success) {
          this.isSuccess = true
          this.mensaje = response.message
          setTimeout(() => {
          this.isSuccess = false 
        }, 3500);
        }else{
          this.isError = true
          this.mensaje = response.message
          setTimeout(() => {
          this.isError = false 
        }, 3500);
        }

      },(error)=>{

      }
    )
    
  }
}
