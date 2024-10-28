import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class WelcomePage implements AfterViewInit {
  constructor(private navCtrl: NavController) { }

  ngAfterViewInit() {
    this.initializeParticles();
  }

  private initializeParticles() {
    const RANDOM = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);
    const PARTICLES = document.querySelectorAll('.particle');

    PARTICLES.forEach(P => {
      P.setAttribute('style', `
        --x: ${RANDOM(20, 80)};
        --y: ${RANDOM(20, 80)};
        --duration: ${RANDOM(6, 20)};
        --delay: ${RANDOM(1, 10)};
        --alpha: ${RANDOM(40, 90) / 100};
        --origin-x: ${Math.random() > 0.5 ? RANDOM(300, 800) * -1 : RANDOM(300, 800)}%;
        --origin-y: ${Math.random() > 0.5 ? RANDOM(300, 800) * -1 : RANDOM(300, 800)}%;
        --size: ${RANDOM(40, 90) / 100};
      `);
    });
  }
  navigateToPage() {
    setTimeout(() => {
      this.navCtrl.navigateForward('/h-sinconexion'); // Ajusta la ruta
    }, 1000); // Retraso de 1 segundo
  }
}


