import { Component, OnInit, AfterViewInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.page.html',
  styleUrls: ['./rutas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class RutasPage  implements AfterViewInit {

  items = [
    {
      title: 'Node.js para backend',
      progressValue: 0.6,
      expirationDate: '2024-12-31'
    },
    {
      title: 'Angular Framework',
      progressValue: 0.8,
      expirationDate: '2024-11-25'
    },
    {
      title: 'ReactJS Frontend',
      progressValue: 0.4,
      expirationDate: '2025-01-15'
    },
    {
      title: 'MongoDB Database',
      progressValue: 0.75,
      expirationDate: '2025-02-20'
    },
    {
      title: 'Docker and Containers',
      progressValue: 0.5,
      expirationDate: '2024-12-05'
    },
    {
      title: 'MongoDB Database',
      progressValue: 0.75,
      expirationDate: '2025-02-20'
    },
    {
      title: 'MongoDB Database',
      progressValue: 0.75,
      expirationDate: '2025-02-20'
    },
    {
      title: 'MongoDB Database',
      progressValue: 0.75,
      expirationDate: '2025-02-20'
    }

  ];

  progressValue: number = 0;  // Valor inicial de la barra de progreso (0 a 1)

  ngAfterViewInit() {
    // Simulación de la actualización de progreso (actualización al 60% después de 400ms)
    setTimeout(() => {
      this.updateProgress(60);  // Establece el progreso en 60%
    }, 400);
  }

  updateProgress(value: number) {
    this.progressValue = value / 100;  // Convertir el porcentaje a un valor entre 0 y 1
  }

}
