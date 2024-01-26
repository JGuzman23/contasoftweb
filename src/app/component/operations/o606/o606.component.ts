import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { InvoiceService } from 'app/services/invoice.service';
import { O606 } from 'app/interfaces/o606.interface';
import { DatePipe, UpperCasePipe} from '@angular/common';
import { Create606Component } from 'app/modals/create606/create606.component';
import * as FileSaver from 'file-saver';




@Component({
  selector: 'app-o606',
  standalone: true,
  imports: [Create606Component,DatePipe],
  templateUrl: './o606.component.html',
  styleUrl: './o606.component.css'
})
export class O606Component {

  public o606s:O606[]=[]
  public isError: boolean = false
  public isSuccess: boolean = false
  public mensaje =''
  public jsonCompany:any

  datosPaginados: O606[] = [];
  paginaActual = 1;
  tamanoPagina = 8;
  hasta =0
  constructor(private invoiceService: InvoiceService) {}
  async ngOnInit(): Promise<void> {
    initFlowbite();

    this.getAll606();
  
  }

  obtenerDatosPaginados(datos: O606[], pagina: number, tamanoPagina: number): O606[] {

    this.hasta= Math.min(this.paginaActual * tamanoPagina, this.o606s.length)
     const inicio = (pagina - 1) * tamanoPagina;
     const fin = inicio + tamanoPagina;
     console.log(datos);
     
     return datos.slice(inicio, fin);
     
   }
 
   async actualizarDatosPaginados() {
    
     
     this.datosPaginados = this.obtenerDatosPaginados(
       this.o606s,
       this.paginaActual,
       this.tamanoPagina
     );
    
     
   }
   cambiarPagina(pagina: number) {
     this.paginaActual = pagina;
     this.actualizarDatosPaginados();
   }
 


  getAll606(){
    var company = localStorage.getItem('company') || '';
    this.jsonCompany = JSON.parse(company);
    if (this.jsonCompany) {
      
    this.invoiceService.GetMy606s(this.jsonCompany.id).subscribe(
      (response)=>{
        this.o606s = response.data
        this.actualizarDatosPaginados()
        
      },(error)=>{

      }
    )
    }
  }

  Generar606(anomes:string){
    console.log(anomes);
    
    this.invoiceService.Generar606(anomes).subscribe(
      (response)=>{
        
        if (response.success) {
          this.isSuccess = true
          this.mensaje = response.message
          setTimeout(() => {
          this.isSuccess = false 
        }, 3500);

        this.getAll606();
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

  descargarxlsx606(id:number,formato:number){
    this.invoiceService.descargar606(id,formato).subscribe(
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
  descargartxt606(id:number,formato:number,anomes:string){

    this.invoiceService.descargar606(id,formato).subscribe(
      (response)=>{
        const contenido = response.data;

        // Crear un Blob (Binary Large Object) con el contenido del archivo y el tipo MIME
        const blob = new Blob([contenido], { type: 'text/plain;charset=utf-8' });
    console.log(blob);
    
        // Utilizar FileSaver para guardar el Blob como un archivo
        FileSaver.saveAs(blob, `606-${this.jsonCompany.name}- ${anomes}.txt`);

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
