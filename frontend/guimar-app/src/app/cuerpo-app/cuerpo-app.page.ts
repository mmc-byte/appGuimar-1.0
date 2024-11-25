import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { createAnimation } from '@ionic/core';

@Component({
  selector: 'app-cuerpo-app',
  templateUrl: './cuerpo-app.page.html',
  styleUrls: ['./cuerpo-app.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink],
})

export class CuerpoAppPage {

  constructor(private router: Router) {}

  irAPerfil() {
    this.router.navigate(['/cuerpo-app/perfil']); // Navegar a la página de perfil
  }
  animateIcon(iconName: string) {
    const icon = document.querySelector(`#${iconName}Icon`) as HTMLElement;
    const animation = createAnimation()
      .addElement(icon)
      .duration(200)
      .keyframes([
        { offset: 0, transform: 'scale(1)' },
        { offset: 0.5, transform: 'scale(1.2)' },
        { offset: 1, transform: 'scale(1)' },
      ])
      .easing('ease-out');
    animation.play();
  }
}
