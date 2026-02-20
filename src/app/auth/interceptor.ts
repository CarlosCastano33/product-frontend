// src/app/auth.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = typeof localStorage !== 'undefined' ? localStorage.getItem('auth_token') : null;

  if (authToken) {
    // Clona la petición y añade el token en la cabecera de autorización.
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${authToken}`)
    });
    return next(authReq);
  }

  // Si no hay token, continúa con la petición original.
  return next(req);
};