import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  loginError = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    // Si el usuario ya está autenticado, redirigir a la página principal
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/productos']);
    }
  }

  onLogin(): void {
    this.loginError = false;
    this.authService.login(this.username, this.password).subscribe({
      next: () => {
        // Redirigir a la página principal tras un login exitoso
        this.router.navigate(['/productos']);
      },
      error: (err) => {
        console.error('Login failed', err);
        this.loginError = true;
      }
    });
  }
}