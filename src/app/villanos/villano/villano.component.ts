import { Component } from '@angular/core';

@Component({
  selector: 'app-villano',
  templateUrl: './villano.component.html',
})
export class VillanoComponent {
  nombre: string = 'Thanos';
  apellido: string = 'Titan';
  edad: number = 59;

  get nombreMinusculas() {
    return this.nombre.toLowerCase();
  }

  nombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  }

  cambiarNombre() {
    this.nombre = 'Gamora';
  }

  cambiarEdad() {
    this.edad = 60;
  }
}
