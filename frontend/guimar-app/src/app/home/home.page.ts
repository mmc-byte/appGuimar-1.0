import { Component, OnInit, AfterViewInit } from '@angular/core';
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
export class HomePage implements OnInit, AfterViewInit {
  items: { title: string; description: string; progress: number }[] = []; // Array para almacenar los elementos (cursos) con progreso

  constructor(private router: Router) {
    addIcons({ create, ellipsisHorizontal, ellipsisVertical, helpCircle, personCircle, search, star });
  }

  ngOnInit() {
    this.loadItems(); // Carga inicial de elementos al iniciar el componente
  }

  ngAfterViewInit() {
    // Simulación de la actualización de progreso de cada card
    this.items.forEach((_, index) => {
      setTimeout(() => this.updateProgress(index, 100), 400);
    });
  }

  loadItems() {
    for (let i = 1; i <= 10; i++) {
      const newItem = {
        title: `Curso ${i}`,
        description: `Descripción del curso ${i}`,
        progress: 0 // Inicializa el progreso en 0%
      };
      this.items.push(newItem);
    }
  }

  updateProgress(index: number, newTargetWidth: number) {
    if (index >= 0 && index < this.items.length) {
      this.items[index].progress = newTargetWidth; // Actualiza el progreso del elemento en el array
    }
  }

  irAPerfil() {
    this.router.navigate(['/cuerpo-app/perfil']);
  }
}
