import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { create, ellipsisHorizontal, ellipsisVertical, helpCircle, personCircle, search, star } from 'ionicons/icons';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PerfilPage {
  constructor() {

    addIcons({ create, ellipsisHorizontal, ellipsisVertical, helpCircle, personCircle, search, star });


  }
  salir() {
    // Aquí puedes agregar la lógica para cerrar sesión, como eliminar el token de autenticación, etc.
    console.log('Cerrando sesión...');
  }



}
