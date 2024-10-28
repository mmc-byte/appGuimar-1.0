import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-h-sinconexion',
  templateUrl: './h-sinconexion.page.html',
  styleUrls: ['./h-sinconexion.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class HSinconexionPage implements OnInit {
  isAlertOpen = false;

  // Lista de elementos para las tarjetas
  items: any[] = []; // Cambiado para iniciar vacío
  private limit: number = 10; // Número de items a cargar por vez
  private currentPage: number = 0; // Página actual

  alertButtons = [
    {
      text: 'Permanecer desconectado',
      role: 'cancel',
      handler: () => {
        console.log('Usuario permanece desconectado');
      }
    },
    {
      text: 'Iniciar sesión',
      handler: () => {
        console.log('Redirigiendo a la página de inicio de sesión');
        this.router.navigate(['/login']); // Redirige a la ruta de inicio de sesión
      }
    }
  ];

  constructor(private alertController: AlertController, private router: Router) {} // Inyecta Router

  ngOnInit() {
    this.loadMoreItems(); // Carga inicial de items
    this.showAlert();
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

  async showAlert() {
    const alert = await this.alertController.create({
      message: 'Te damos la bienvenida de nuevo ' + 'Para visualizar más cursos, inicie sesión',
      buttons: this.alertButtons
    });

    await alert.present();
  }

  irAPerfil() {
    this.router.navigate(['/login']); // Navegar a la página de perfil
  }
}
