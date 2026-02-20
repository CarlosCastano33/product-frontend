import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../model/Producto'; // Importamos la interfaz Producto
import { ProductoCardComponent } from '../producto-card/producto-card'; // Importamos el subcomponente
import { ProductoService } from '../service/producto.service'; // Importamos el servicio

@Component({
  selector: 'app-producto-list',
  standalone: true,
  imports: [CommonModule, ProductoCardComponent],
  templateUrl: './producto-list.html',
  styleUrl: './producto-list.css'
})
export class ProductoListComponent implements OnInit {
  // Inicializamos la propiedad como un array vacío
  productos: Producto[] = [];

  // Inyectamos el servicio en el constructor
  constructor(private productoService: ProductoService) {}

  // Usamos ngOnInit para obtener los datos del servicio
  ngOnInit(): void {
    this.productoService.getProductos().subscribe({
      next: (data) => this.productos = data,
      error: (err) => console.error('Error al cargar productos', err)
    });
  }
  
}