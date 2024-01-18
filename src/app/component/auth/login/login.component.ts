import { Component, NgModule } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private authService: AuthService, private router:Router) {}

  user={
    email:'',
    password:''
  }
  
  login() {

    console.log('heo');
    
    this.authService.login(this.user.email, this.user.password);
    
     this.router.navigateByUrl('/')
   
  }
}
