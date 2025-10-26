import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Carlitos';

  setTitle(){
    this.title = 'El Bueno';
  }
  
}
