import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule} from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  standalone: true,
  imports: [IonicModule,RouterLink, CommonModule, FormsModule]
})
export class CarritoPage {
  filteredCursos = [
    {
      titulo: 'Curso de Angular',
      descripcion: 'Aprende Angular desde cero.',
      imagen: 'assets/icon/favicon.png'
    },
    {
      titulo: 'Curso de Ionic',
      descripcion: 'Crea aplicaciones móviles con Ionic.',
      imagen: 'assets/icon/favicon.png'
    }
  ];

  carrito: any[] = [];

  constructor() { }

  // Función para agregar un curso al carrito
  agregarAlCarrito(curso: any) {
    this.carrito.push(curso); // Agregar el curso al carrito
    console.log('Curso agregado al carrito:', curso);
  }

  // Función para eliminar un curso del carrito
  eliminarDelCarrito(curso: any) {
    // Puedes acceder al ID aquí si lo necesitas
    const eliminarId = 'eliminar-' + this.filteredCursos.indexOf(curso);
    console.log('Botón de eliminar con ID:', eliminarId);

    // Filtrar el curso que se quiere eliminar
    this.carrito = this.carrito.filter(item => item !== curso);
    console.log('Curso eliminado del carrito:', curso);
  }
}
