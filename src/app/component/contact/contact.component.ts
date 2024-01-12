import { Component } from '@angular/core';
import { CreatecontactComponent } from '../../modals/createcontact/createcontact.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CreatecontactComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
