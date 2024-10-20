import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuerpo-app',
  templateUrl: './cuerpo-app.page.html',
  styleUrls: ['./cuerpo-app.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})

export class CuerpoAppPage {

  constructor(private router: Router) {}

  irAPerfil() {
    this.router.navigate(['/cuerpo-app/perfil']); // Navegar a la página de perfil
  }
}
