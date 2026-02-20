import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoService } from './service/producto.service';
import { Producto } from './model/Producto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App{
  protected title = 'Carlitos';

  setTitle(){
    this.title = 'El Bueno';
  }
  
}
