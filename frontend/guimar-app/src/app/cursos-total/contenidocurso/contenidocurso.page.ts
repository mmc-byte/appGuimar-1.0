import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-contenidocurso',
  templateUrl: './contenidocurso.page.html',
  styleUrls: ['./contenidocurso.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class ContenidocursoPage {
  selectedSegment: string = 'calificacion'; // El valor por defecto es 'calificacion'

  // Descripción general del curso
  descripcionCurso: string = `Este curso tiene como objetivo proporcionar una introducción profunda al desarrollo de aplicaciones móviles usando Angular y Ionic. Durante las lecciones, los participantes aprenderán a trabajar con componentes, directivas, formularios y validaciones en Angular, así como a integrar estos conocimientos para desarrollar aplicaciones móviles con Ionic. Además, los instructores guiarán a los estudiantes a través de ejercicios prácticos que les permitirán aplicar lo aprendido en situaciones reales de desarrollo. Al finalizar, los estudiantes estarán preparados para crear aplicaciones móviles interactivas y escalables utilizando estas tecnologías.`;

  // Instructores comunes en todos los temas
  instructoresComunes = [
    { nombre: 'Instructor 1', descripcion: 'Experto en programación front-end con Angular.' },
    { nombre: 'Instructor 2', descripcion: 'Especialista en Ionic y desarrollo de aplicaciones móviles.' }
  ];

  // Arreglo de temas del curso sin descripciones
  temas = [
    {
      nombre: 'Tema 1',
      duracion: '10 minutos',
      nota: 18, // Nota agregada para este tema
      instructores: this.instructoresComunes, // Usamos los instructores comunes
      items: [
        { label: 'Reproducir', icon: 'play', action: 'play' },
        { label: 'Rendir Evaluación', icon: 'clipboard', action: 'redirect' }
      ]
    },
    {
      nombre: 'Tema 2',
      duracion: '10 minutos',
      nota: 16, // Nota agregada para este tema
      instructores: this.instructoresComunes, // Usamos los instructores comunes
      items: [
        { label: 'Reproducir', icon: 'play', action: 'play' },
        { label: 'Rendir Evaluación', icon: 'clipboard', action: 'redirect' },
        { label: 'Examen 1', icon: 'clipboard', action: 'redirect' }
      ]
    },
    {
      nombre: 'Tema 3',
      duracion: '10 minutos',
      nota: 17, // Nota agregada para este tema
      instructores: this.instructoresComunes, // Usamos los instructores comunes
      items: [
        { label: 'Reproducir', icon: 'play', action: 'play' },
        { label: 'Rendir Evaluación', icon: 'clipboard', action: 'redirect' }
      ]
    },
    {
      nombre: 'Examen Final',
      duracion: '1 Hora',
      nota: 20, // Nota agregada para este examen
      instructores: this.instructoresComunes, // Usamos los instructores comunes
      items: [
        { label: 'Rendir Examen', icon: 'clipboard', action: 'redirect' }
      ]
    }
  ];

  tema: string | null = null; // Tema recibido por parámetros
  item: string | null = null; // Ítem recibido por parámetros

  constructor(private route: ActivatedRoute) {
    // Obtener los parámetros de la URL al cargar la página
    this.route.queryParams.subscribe(params => {
      this.tema = params['tema'] || null;
      this.item = params['item'] || null;
      console.log('Parámetros recibidos:', { tema: this.tema, item: this.item });
    });
  }

  // Evento que se dispara al cambiar de segmento
  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
    console.log('Segment changed:', this.selectedSegment);
  }

  // Acción personalizada para el botón "Reproducir"
  playContent(tema: string) {
    console.log('Reproduciendo contenido del tema:', tema);
    // Aquí puedes agregar lógica personalizada para el botón "Reproducir".
  }
}
