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
  constructor(private authService: AuthService, private router: Router) {}

  user = {
    email: '',
    password: '',
  }
  loading=false
  public mostrar: boolean = false
  public mensaje =''
 

  login() {

    this.loading=true

    this.authService
      .login(this.user.email, this.user.password)
      .subscribe((res) => {
        if (res.success) {
          this.loading=false
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('userID', res.data.id);
          this.router.navigateByUrl('');
          
        } else {
          this.loading=false
          this.mostrar = true

          this.mensaje = res.message
          setTimeout(() => {
            this.mostrar = false 
          }, 3000);
        }
      })
  }
}
