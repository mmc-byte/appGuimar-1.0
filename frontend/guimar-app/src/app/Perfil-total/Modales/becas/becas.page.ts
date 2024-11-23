import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule} from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-becas',
  templateUrl: './becas.page.html',
  styleUrls: ['./becas.page.scss'],
  standalone: true,
  imports: [IonicModule,RouterLink, CommonModule, FormsModule]
})
export class BecasPage {
  // Objeto para almacenar los datos del formulario
  postulante = {
    nombre: '',
    email: '',
    telefono: '',
    motivacion: '',
    archivo: null
  };

  constructor() { }

  // Función para manejar el archivo seleccionado
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.postulante.archivo = file;
      console.log('Archivo seleccionado:', file);
    }
  }

  // Función para enviar la postulación
  enviarPostulacion() {
    // Validar que los campos obligatorios estén completos
    if (this.postulante.nombre && this.postulante.email && this.postulante.motivacion) {
      console.log('Postulación enviada:', this.postulante);
      // Aquí puedes agregar la lógica para enviar los datos al servidor
    } else {
      console.log('Por favor complete todos los campos obligatorios.');
    }
  }
}
