import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../service/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Inyectamos el servicio de autenticación
  if (authService.isAuthenticated()) {
    return true; // Si el usuario está autenticado, permite el acceso a la ruta
  } else {
    router.navigate(['/login']); // Si no está autenticado, redirige al login
    return false; // Deniega el acceso
  }
};