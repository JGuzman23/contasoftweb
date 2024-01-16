import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
  let router = inject(Router);

  // Check if localStorage is available before using it
  if (typeof localStorage !== 'undefined') {
    const token = localStorage.getItem('token');
    console.log(token);

    if (token) {
      let decodedToken = jwtDecode(token);
      const isExpired = decodedToken && decodedToken.exp ? decodedToken.exp < Date.now() / 1000 : false;

      if (isExpired) {
        console.log('token expirado');
        localStorage.removeItem('token');
        // router.navigateByUrl('/login');
      } else {
        req.clone({
          setHeaders:{
            Authorization :`Bearer ${localStorage.getItem("token")}`
          },
        });
        console.log('token no expirado');
      }
    }
  }else{
    // router.navigateByUrl('/login');
  }

  return next(req);
};
