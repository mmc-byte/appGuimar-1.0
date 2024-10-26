import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonApp, IonRouterOutlet, IonTabs, IonTabButton, IonTabBar, IonIcon, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonLabel, IonIcon, IonTabBar, IonTabButton, IonTabs, IonApp, IonRouterOutlet, RouterLink],
})
export class AppComponent {
  etapa: string;

  constructor() {
    // Simulando la respuesta del backend
    this.etapa = 'niño'; // Puedes cambiar esto a 'adolescente' o 'adulto'
  }
}
