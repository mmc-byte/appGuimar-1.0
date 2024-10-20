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
    this.showAlert();
  }

  async showAlert() {
    const alert = await this.alertController.create({
      message: 'Te damos la bienvenida de nuevo '+ 'Para vizualisar mas cursos inicie sesion',
      buttons: this.alertButtons
    });

    await alert.present();
  }

  irAPerfil() {
    this.router.navigate(['/login']); // Navegar a la página de perfil
  }
}
