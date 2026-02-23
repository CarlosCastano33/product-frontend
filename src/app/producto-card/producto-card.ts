import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../model/product.interface'; // Importamos la interfaz Producto

@Component({
  selector: 'app-producto-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto-card.html',
  styleUrl: './producto-card.css'
})
export class ProductoCardComponent {
  // Con @Input, este componente recibe un objeto 'producto' del componente padre
  @Input() producto!: Producto;
}