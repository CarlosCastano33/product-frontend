import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoListComponent } from '../producto-list/producto-list';
import { ProductoFormComponent } from '../producto-form/producto-form';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule, ProductoListComponent, ProductoFormComponent],
  templateUrl: './producto.component.html'
})
export class ProductoComponent {
}
