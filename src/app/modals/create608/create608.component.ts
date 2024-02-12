import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create608',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create608.component.html',
  styleUrl: './create608.component.css'
})
export class Create608Component {
  @Output() create608: EventEmitter<string> = new EventEmitter<string>();

  public anomes:any[]=[
    '2024/01','2024/02','2024/03','2024/04','2024/05','2024/06',
  ]
  public anomesSelected=''


  crear(){
    this.create608.emit(this.anomesSelected)
    console.log(this.anomesSelected);
    
  }
}
