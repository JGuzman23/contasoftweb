import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  show(message: string, options?: any): void {
    // Crea el elemento toast si no existe
    let toastElem = document.querySelector('.toast');
    if (!toastElem) {
      toastElem = document.createElement('div');
      toastElem.classList.add('toast');
      document.body.appendChild(toastElem);
    }

    // Configura el mensaje y las opciones del toast
    toastElem.textContent = message;
    
   
  }
}
