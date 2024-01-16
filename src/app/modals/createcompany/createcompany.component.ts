import { Component, Output ,EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Company } from 'app/interfaces/company.interface';


@Component({
  selector: 'app-createcompany',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './createcompany.component.html',
  styleUrl: './createcompany.component.css'
})
export class CreatecompanyComponent {

  @Output() createCompany: EventEmitter<Company> = new EventEmitter<Company>();


  public newCompany:Company =   {
    id: 0,
    userid: 1,
    name: '',
    rnc: '',
    address: '',
    telefono: '',
    photo: '',
   
    
  }

  constructor() {
   
    
  }

  create()
  {
    this.createCompany.emit(this.newCompany)
    
  }

}
