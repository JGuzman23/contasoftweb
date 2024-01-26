import { Component, Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-create606',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create606.component.html',
  styleUrl: './create606.component.css'
})
export class Create606Component {
  @Output() create606: EventEmitter<string> = new EventEmitter<string>();

  public anomes:any[]=[
    '2024/01','2024/02','2024/03','2024/04','2024/05','2024/06',
  ]
  public anomesSelected=''


  crear(){
    this.create606.emit(this.anomesSelected)
    console.log(this.anomesSelected);
    
  }
}
