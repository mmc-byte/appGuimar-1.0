import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { create, ellipsisHorizontal, ellipsisVertical, helpCircle, personCircle, search, star } from 'ionicons/icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage implements OnInit {

  // Lista de elementos para las tarjetas
  items: any[] = []; // Cambiado para iniciar vacío
  private limit: number = 10; // Número de items a cargar por vez
  private currentPage: number = 0; // Página actual

  ngOnInit() {
    this.loadMoreItems(); // Carga inicial de items
  }

  loadMoreItems() {
    // Simulando la carga de datos (puedes reemplazarlo con una llamada a tu API)
    for (let i = 0; i < this.limit; i++) {
      const newItem = {
        title: `Curso ${this.currentPage * this.limit + i + 1}`,
        description: `Descripción del curso ${this.currentPage * this.limit + i + 1}`,
      };
      this.items.push(newItem);
    }
    this.currentPage++;
  }

  onScroll(event: any) {
    const element = event.target;
    const scrollPosition = element.scrollLeft + element.clientWidth;
    const scrollWidth = element.scrollWidth;

    if (scrollPosition >= scrollWidth - 5) {
      this.loadMoreItems(); // Cargar más items cuando se llegue al final
    }
  }

  constructor(private router: Router) {

    addIcons({ create, ellipsisHorizontal, ellipsisVertical, helpCircle, personCircle, search, star });

  }
  irAPerfil() {
    this.router.navigate(['/cuerpo-app/perfil']);
  }
}
