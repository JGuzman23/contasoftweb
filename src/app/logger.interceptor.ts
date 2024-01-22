import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable, of } from 'rxjs';

export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
  let router = inject(Router);

  const excludedUrls = [
    '/Auth',
    '/register', // Añade aquí otras rutas que deseas excluir
  ];


  
  // Verifica si la URL actual debe ser excluida
  if (excludedUrls.some(url => req.url.includes(url))) {
   
    
    // Si la URL está excluida, simplemente pasa la solicitud sin modificar
    return next(req);
  }
  let token
  if (typeof localStorage !== 'undefined') {
  token = localStorage.getItem('token');
  }
  

  if (!token) {
    router.navigateByUrl('/login');
    return of();
  }
  let decodedToken;
  try {
    decodedToken = jwtDecode(token);
  } catch (error) {
    localStorage.removeItem('token');
    router.navigateByUrl('/login');
    return of();
  }

  const isExpired =
    decodedToken && decodedToken.exp
      ? decodedToken.exp < Date.now() / 1000
      : true;

  if (isExpired) {
    console.log('Token expirado');
    localStorage.removeItem('token');
    router.navigateByUrl('/login');
    return of();
  }

  const clonedReq = req.clone({
    setHeaders: {
      Authorization: `Bearer `,
    },
  });

  return next(clonedReq);

  // Check if localStorage is available before using it
  // if (typeof localStorage !== 'undefined') {
  //   const token = localStorage.getItem('token');
  //   console.log(token);

  //   if (token) {
  //     let decodedToken = jwtDecode(token);
  //     const isExpired = decodedToken && decodedToken.exp ? decodedToken.exp < Date.now() / 1000 : false;

  //     if (isExpired) {
  //       console.log('token expirado');
  //       localStorage.removeItem('token');
  //       // router.navigateByUrl('/login');
  //     } else {
  //       req.clone({
  //         setHeaders:{
  //           Authorization :`Bearer ${localStorage.getItem("token")}`
  //         },
  //       });
  //       console.log('token no expirado');
  //     }
  //   }
  // }else{
  //   // router.navigateByUrl('/login');
  // }

  // return next(req);
};

// @Injectable()
// export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
//   constructor(private router: Router) {}

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const token = localStorage.getItem('token');
//     console.log(token);

//     if (!token) {
//       this.router.navigateByUrl('/login');
//       return of();
//     }

//     let decodedToken;
//     try {
//       decodedToken = jwtDecode(token);
//     } catch (error) {
//       localStorage.removeItem('token');
//       this.router.navigateByUrl('/login');
//       return of();
//     }

//     const isExpired = decodedToken && decodedToken.exp ? decodedToken.exp < Date.now() / 1000 : true;

//     if (isExpired) {
//       console.log('Token expirado');
//       localStorage.removeItem('token');
//       this.router.navigateByUrl('/login');
//       return of();
//     }

//     const clonedReq = req.clone({
//       setHeaders: {
//         Authorization: `Bearer ${token}`
//       }
//     });

//     return next.handle(clonedReq);
//   }

// }
