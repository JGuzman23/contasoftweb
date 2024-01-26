import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { InvoiceService } from 'app/services/invoice.service';
import { O607 } from 'app/interfaces/o607.interface';
import FileSaver from 'file-saver';
import { DatePipe, UpperCasePipe} from '@angular/common';
import { Create607Component } from 'app/modals/create607/create607.component';


@Component({
  selector: 'app-o607',
  standalone: true,
  imports: [Create607Component,DatePipe],
  templateUrl: './o607.component.html',
  styleUrl: './o607.component.css'
})
export class O607Component {

  constructor(private invoiceService: InvoiceService) {}
  public o607s:O607[]=[]
  public isError: boolean = false
  public isSuccess: boolean = false
  public mensaje =''
  public jsonCompany:any

  datosPaginados: O607[] = [];
  paginaActual = 1;
  tamanoPagina = 8;
  hasta =0
  async ngOnInit(): Promise<void> {
    initFlowbite();

    this.getAll607();
  
  }

  obtenerDatosPaginados(datos: O607[], pagina: number, tamanoPagina: number): O607[] {

    this.hasta= Math.min(this.paginaActual * tamanoPagina, this.o607s.length)
     const inicio = (pagina - 1) * tamanoPagina;
     const fin = inicio + tamanoPagina;
     console.log(datos);
     
     return datos.slice(inicio, fin);
     
   }
 
   async actualizarDatosPaginados() {
    
     
     this.datosPaginados = this.obtenerDatosPaginados(
       this.o607s,
       this.paginaActual,
       this.tamanoPagina
     );
    
     
   }
   cambiarPagina(pagina: number) {
     this.paginaActual = pagina;
     this.actualizarDatosPaginados();
   }

  getAll607(){
    var company = localStorage.getItem('company') || '';
    this.jsonCompany = JSON.parse(company);
    if (this.jsonCompany) {
      
    this.invoiceService.GetMy607s(this.jsonCompany.id).subscribe(
      (response)=>{
        console.log(response.data);
        
        this.o607s = response.data
        this.actualizarDatosPaginados()
        
      },(error)=>{

      }
    )
    }
  }

  Generar607(anomes:string){
    console.log(anomes);
    
    this.invoiceService.Generar607(anomes).subscribe(
      (response)=>{
        
        if (response.success) {
          this.isSuccess = true
          this.mensaje = response.message
          setTimeout(() => {
          this.isSuccess = false 
        }, 3500);

        this.getAll607();
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

  descargarxlsx607(id:number,formato:number){

    console.log('el id',id);
    
    this.invoiceService.descargar607(id,formato).subscribe(
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
  descargartxt607(id:number,formato:number,anomes:string){

    this.invoiceService.descargar607(id,formato).subscribe(
      (response)=>{
        const contenido = response.data;

        // Crear un Blob (Binary Large Object) con el contenido del archivo y el tipo MIME
        const blob = new Blob([contenido], { type: 'text/plain;charset=utf-8' });
    console.log(blob);
    
        // Utilizar FileSaver para guardar el Blob como un archivo
        FileSaver.saveAs(blob, `607-${this.jsonCompany.name}- ${anomes}.txt`);

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
