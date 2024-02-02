import { Component, Input } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent  {

  /**
   *
   */
  @Input() id:number=0  
  async ngOnInit(): Promise<void> {
    initFlowbite();
  }

  mostrar(id :number){
    var dd = document.getElementById('dropdown'+id)
    var base =100
    var con = 50 * id;

    (base+con )
    if(dd ){

      if(dd.classList.contains("hidden")){
        dd.classList.remove("hidden");
        dd.classList.add("block")
        dd.style.position="absolute"
        dd.style.inset="0px auto auto 0px"
        dd.style.margin="0px"
        dd.style.transform="translate3d(882.4px, "+(base+con)+"px, 0px)"
      }
      else{
        dd.classList.add("hidden");
        dd.classList.remove("block")
      }
     
      // position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(882.4px, 555.2px, 0px);
    }
   
    
  }
}
