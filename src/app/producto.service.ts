import { Injectable } from '@angular/core';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  constructor() { }

  // Datos ficticios. En la siguiente clase, esta lógica se reemplazará por una llamada HTTP.
  getProductos(): Producto[] {
    return [
      { id: 1, nombre: 'Laptop', precio: 1200, imagenUrl: 'https://placehold.co/400x200/cccccc/000000?text=Laptop' },
      { id: 2, nombre: 'Mouse', precio: 25, imagenUrl: 'https://placehold.co/400x200/cccccc/000000?text=Mouse' },
      { id: 3, nombre: 'Teclado Mecánico', precio: 75, imagenUrl: 'https://placehold.co/400x200/cccccc/000000?text=Teclado' },
      { id: 4, nombre: 'Monitor', precio: 300, imagenUrl: 'https://placehold.co/400x200/cccccc/000000?text=Monitor' },
      { id: 5, nombre: 'Cámara Web', precio: 50, imagenUrl: 'https://placehold.co/400x200/cccccc/000000?text=Camara' }
    ];
  }
}