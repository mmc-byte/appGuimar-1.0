import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.page.html',
  styleUrls: ['./explorar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink],
})
export class ExplorarPage implements OnInit {
  searchQuery: string = ''; // Valor del campo de búsqueda
  keywords: string[] = ['Angular', 'Ionic', 'JavaScript', 'TypeScript', 'React', 'Vue', 'Node.js']; // Palabras clave más buscadas
  filteredKeywords: string[] = []; // Palabras clave filtradas en función de la búsqueda
  showSuggestions: boolean = false; // Controla la visibilidad de las sugerencias

  // Cursos con IDs únicos
  cursos: {
    id: number;
    titulo: string;
    descripcion: string;
    imagen: string;
    tipo: string;
    duracion?: string;
    precio?: number;
    cursos?: any[];  // Cursos dentro de la ruta
  }[] = [
    {
      id: 3,
      titulo: 'Rutas de Angular',
      descripcion: 'Explora cómo navegar en Angular',
      imagen: 'assets/icon/favicon.png',
      tipo: 'routes',
      duracion: '10 horas',
      precio: 9.99,
      cursos: [
        {
          id: 1,
          titulo: 'JavaScript 6',
          descripcion: 'JavaScript/TypeScript, aprendizaje intensivo',
          imagen: 'assets/icon/favicon.png',
          duracion: '12 horas'
        },
        {
          id: 2,
          titulo: 'Ionic Framework',
          descripcion: 'Desarrolla aplicaciones móviles con Ionic',
          imagen: 'assets/icon/favicon.png',
          duracion: '8 horas'
        },
        {
          id: 4,
          titulo: 'Node.js para backend',
          descripcion: 'Construye aplicaciones backend con Node.js',
          imagen: 'assets/icon/favicon.png',
          duracion: '15 horas'
        }
      ]
    },
    {
      id: 5,
      titulo: 'Rutas de React',
      descripcion: 'Manejo de rutas en React',
      imagen: 'assets/icon/favicon.png',
      tipo: 'routes',
      duracion: '7 horas',
      precio: 11.99,
      cursos: [
        {
          id: 2,
          titulo: 'Ionic Framework',
          descripcion: 'Desarrolla aplicaciones móviles con Ionic',
          imagen: 'assets/icon/favicon.png',
          duracion: '8 horas'
        }
      ]
    },
    {
      id: 6,
      titulo: 'Node.js para backend',
      descripcion: 'Construye aplicaciones backend con Node.js',
      imagen: 'assets/icon/favicon.png',
      tipo: 'courses',
      duracion: '15 horas',
      precio: 24.99,
    },
    {
      id: 7,
      titulo: 'Curso intensivo de React',
      descripcion: 'Manejo de rutas en React',
      imagen: 'assets/icon/favicon.png',
      tipo: 'courses',
      duracion: '7 horas',
      precio: 11.99,
    },
  ];


  filteredCursos = this.cursos; // Cursos filtrados

  // Filtro por tipo de curso
  selectedFilter: string = 'all'; // Filtro por defecto

  // Variables para manejar los modales
  isModalOpen: boolean = false;
  isModalRutaOpen: boolean = false; // Modal para rutas
  selectedCurso: any = null; // Curso seleccionado para mostrar en el modal
  selectedRuta: any = null; // Ruta seleccionada para mostrar en el modal

  constructor(private router: Router, private alertController: AlertController) {}

  ngOnInit() {
    this.filteredKeywords = this.keywords;
  }

  // Método para abrir el modal de cursos
  setOpen(isOpen: boolean, curso: any = null) {
    this.isModalOpen = isOpen;
    if (isOpen && curso) {
      this.selectedCurso = curso;
    }
  }

  // Método para abrir el modal de rutas
  setOpenRuta(isOpen: boolean, ruta: any = null) {
    this.isModalRutaOpen = isOpen;
    if (isOpen && ruta) {
      this.selectedRuta = ruta;
    }
  }

  irAPerfil() {
    this.router.navigate(['/cuerpo-app/perfil']);
  }

  // Método para aplicar el filtro
  onFilter(event: any) {
    const selectedValue = event.detail.value;
    this.selectedFilter = selectedValue;
    this.applyFilter();
  }

  applyFilter() {
    if (this.selectedFilter === 'all') {
      this.filteredCursos = this.cursos;
    } else {
      this.filteredCursos = this.cursos.filter(curso => curso.tipo === this.selectedFilter);
    }
    this.onSearch();
  }

  onSearch() {
    if (this.searchQuery.trim() === '') {
      this.showSuggestions = false;
      this.applyFilter();
    } else {
      this.showSuggestions = true;
      this.filteredKeywords = this.keywords.filter(keyword =>
        keyword.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      this.filteredCursos = this.filteredCursos.filter(curso =>
        curso.titulo.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        curso.descripcion.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }

  // Método para manejar la selección de palabra clave
  onKeywordClick(keyword: string) {
    this.searchQuery = keyword;
    this.showSuggestions = false;
    this.onSearch();
  }

  // Método para mostrar sugerencias al enfocar el campo de búsqueda
  onFocus() {
    if (this.searchQuery.trim() === '') {
      this.showSuggestions = true;
    }
  }

  // Método para ocultar sugerencias al perder el enfoque
  onBlur() {
    if (this.searchQuery.trim() === '') {
      this.showSuggestions = false;
    }
  }

  // Método para agregar ruta al carrito
  agregarRutaACarrito() {
    console.log('Ruta agregada al carrito:', this.selectedRuta);
    this.mostrarAlerta();
    this.setOpenRuta(false); // Cerrar modal después de agregar al carrito
  }

  // Mostrar alerta cuando se agrega correctamente
  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: '¡Ruta añadida correctamente al carrito!',
      buttons: ['OK'],
    });
    await alert.present();
  }
}
