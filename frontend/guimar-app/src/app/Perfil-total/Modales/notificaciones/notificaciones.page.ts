import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, CommonModule, FormsModule]
})
export class NotificacionesPage  {
  // Lista de mensajes actualizada con diferentes tipos de notificaciones
  mensajes = [
    {
      titulo: 'Beca Aceptada',
      descripcion: 'Tu postulación para la beca de estudios ha sido aceptada. ¡Felicidades!',
      leido: false
    },
    {
      titulo: 'Nuevos Cursos Disponibles',
      descripcion: 'Nuevos cursos están disponibles, ¡aprende Angular 7 y más!',
      leido: false
    },
    {
      titulo: 'Nueva Ruta Disponible',
      descripcion: 'Una nueva ruta de transporte está disponible en tu área.',
      leido: false
    },
    {
      titulo: 'Postulación Abierta para Beca',
      descripcion: '¡La postulación para la beca de investigación está abierta! Aplica ahora.',
      leido: false
    },
    {
      titulo: 'Curso de Ionic Disponible',
      descripcion: '¡Nuevo curso de Ionic disponible para ti! Aprende a crear apps móviles ahora.',
      leido: false
    },
    {
      titulo: 'Actualización de la Ruta de Transporte',
      descripcion: 'Tu ruta de transporte ha sido actualizada. Consulta los nuevos horarios.',
      leido: false
    }
  ];

  constructor() { }

  // Función para marcar la notificación como leída
  marcarLeido(mensaje: any) {
    mensaje.leido = true; // Cambiar el estado a "leído"
    console.log('Notificación leída:', mensaje.titulo);
  }

  // Alternativa: función para agregar a favoritos (estrella)
  agregarFavorito(mensaje: any) {
    mensaje.favorito = true; // Cambiar el estado a "favorito"
    console.log('Notificación agregada a favoritos:', mensaje.titulo);
  }
}
