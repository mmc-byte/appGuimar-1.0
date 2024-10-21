import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonItem, IonLabel, IonButton, IonList, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonAvatar, IonBackButton, IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonButtons, IonBackButton, IonAvatar, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonList, IonButton, IonLabel, IonItem, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PerfilPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  salir() {
    // Aquí puedes agregar la lógica para cerrar sesión, como eliminar el token de autenticación, etc.
    console.log('Cerrando sesión...');
  }

}
