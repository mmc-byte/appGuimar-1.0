import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';  // Asegúrate de importar IonicModule
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.page.html',
  styleUrls: ['./certificados.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]  // Aquí importas IonicModule
})
export class CertificadosPage {

  // Lista de cursos con nombre, descripción y logo
  cursos = [
    {
      nombre: 'Curso de Angular',
      descripcion: 'Aprende los fundamentos de Angular y crea aplicaciones web',
      logo: 'https://example.com/angular-logo.png',  // Aquí pon la URL de la imagen
    },
    {
      nombre: 'Curso de Ionic',
      descripcion: 'Desarrolla aplicaciones móviles usando Ionic',
      logo: 'https://example.com/ionic-logo.png',    // Aquí pon la URL de la imagen
    },
    {
      nombre: 'Curso de React',
      descripcion: 'Construye aplicaciones con React y JSX',
      logo: 'https://example.com/react-logo.png',     // Aquí pon la URL de la imagen
    },
  ];

  constructor() { }

  // Método para descargar el certificado
  descargarCertificado(curso: any) {
    console.log(`Descargando certificado de ${curso.nombre}`);
    // Aquí puedes agregar la lógica para descargar el certificado
  }
}
