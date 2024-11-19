import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
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

  constructor(private router: Router) {}

  ngOnInit() {
    this.filteredKeywords = this.keywords; // Inicializamos las palabras filtradas con todas las palabras clave
  }

  irAPerfil() {
    this.router.navigate(['/cuerpo-app/perfil']);
  }

  // Método para manejar la selección de filtros
  onFilter(event: any) {
    const selectedValue = event.detail.value;
    console.log('Filtro seleccionado:', selectedValue);
    // Aquí puedes agregar la lógica para actualizar los elementos filtrados
  }

  // Método para manejar el input en el buscador
  onSearch() {
    // Filtramos las palabras clave que contienen el texto ingresado
    if (this.searchQuery.trim() === '') {
      this.showSuggestions = false; // Ocultar sugerencias si no hay texto
    } else {
      this.showSuggestions = true; // Mostrar sugerencias mientras se escribe
      this.filteredKeywords = this.keywords.filter(keyword =>
        keyword.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }

  // Método para manejar el clic en una palabra clave
  onKeywordClick(keyword: string) {
    this.searchQuery = keyword; // Al hacer clic, la palabra clave seleccionada se coloca en el campo de búsqueda
    this.showSuggestions = false; // Ocultar las sugerencias al seleccionar una palabra clave
    this.onSearch(); // Filtrar los resultados con la nueva búsqueda
  }

  // Método para mostrar las sugerencias cuando el campo de búsqueda recibe el enfoque
  onFocus() {
    if (this.searchQuery.trim() === '') {
      this.showSuggestions = true; // Mostrar las sugerencias cuando se hace clic en el campo de búsqueda
    }
  }

  // Método para ocultar las sugerencias cuando el campo de búsqueda pierde el enfoque
  onBlur() {
    if (this.searchQuery.trim() === '') {
      this.showSuggestions = false; // Ocultar sugerencias si no hay texto
    }
  }
}
