import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonCol, IonIcon, IonProgressBar, IonRow } from '@ionic/angular/standalone';

@Component({
  selector: 'app-mi-aprendizaje',
  templateUrl: './mi-aprendizaje.page.html',
  styleUrls: ['./mi-aprendizaje.page.scss'],
  standalone: true,
  imports: [IonRow, IonProgressBar, IonIcon, IonCol, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MiAprendizajePage implements OnInit {
  rutas = [
    { nombre: 'Programación Web', progreso: 60, tipo: 'sistema' },
    { nombre: 'Diseño de UI', progreso: 30, tipo: 'sistema' },
    { nombre: 'Hacer apps delivery', progreso: 98, tipo: 'custom' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
