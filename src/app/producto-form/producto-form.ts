import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-producto-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './producto-form.html',
  styleUrl: './producto-form.css'
})
export class ProductoFormComponent implements OnInit {
  productoForm: FormGroup;

  // El FormBuilder simplifica la creación de formularios reactivos
  constructor(private fb: FormBuilder) {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      precio: [null, [Validators.required, Validators.min(0)]],
      imagenUrl: ['', Validators.required]
    });
  }

  // ngOnInit se ejecuta una vez cuando el componente se inicializa
  ngOnInit(): void {
    // Aquí podríamos precargar datos de un producto si estuviéramos editando
  }

  onSubmit() {
    // Verificamos si el formulario es válido antes de enviar
    if (this.productoForm.valid) {
      console.log('Formulario enviado:', this.productoForm.value);
      // Aquí se enviaría el producto a la API del backend
    }
  }
}