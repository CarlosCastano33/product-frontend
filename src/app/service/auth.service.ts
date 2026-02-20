import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

/**
 * Interfaz para la respuesta del backend tras un login exitoso.
*/
interface AuthResponse {
  jwt: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

  /**
   * Realiza una petición de login al backend.
  * @param username El nombre de usuario.
  * @param password La contraseña.
  * @returns Un Observable con la respuesta del servidor.
  */
  login(username: string, password: string): Observable<AuthResponse> {
    // La petición POST envía un objeto con el username y el password.
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, { username, password }).pipe(
      tap((response: AuthResponse) => {
        // Almacena el token en el localStorage al recibir una respuesta exitosa
        localStorage.setItem('auth_token', response.jwt);
      })
    );
  }

  /**
   * Verifica si el usuario está autenticado.
  * @returns true si hay un token en el localStorage, de lo contrario false.
  */
  isAuthenticated(): boolean {
    return !!localStorage.getItem('auth_token');
  }

  /**
   * Cierra la sesión del usuario.
  */
  logout(): void {
    localStorage.removeItem('auth_token');
  }
}