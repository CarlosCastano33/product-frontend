import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductoComponent } from './producto/producto.component';
import { authGuard } from './auth/auth.guard'; // Importamos el guard

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'productos', component: ProductoComponent, canActivate: [authGuard] }
];