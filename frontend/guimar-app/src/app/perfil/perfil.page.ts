import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
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
  imageSrc: string = 'assets/icon/hacker (1).svg'; // Ruta de la imagen de perfil por defecto
  user = {
    name: 'Luis',
    lastName: 'Palomino',
    age: 20,
    address: 'Cisnes 165, Callao',
    username: 'Pafos',
    email: 'correo.com',
    phone: '(+51) 995954440'
  };

  editName: boolean = false;
  editLastName: boolean = false;
  editAge: boolean = false;
  editAddress: boolean = false;
  editUsername: boolean = false;
  editEmail: boolean = false;
  editPhone: boolean = false;

  @ViewChild('subscriptionModal') subscriptionModal: any; // Referencia al modal

  constructor(private modalController: ModalController) {
    // Añade los iconos de Ionicons
    addIcons({ create, ellipsisHorizontal, ellipsisVertical, helpCircle, personCircle, search, star });
  }

  handleFileInput(event: any) {
    const file = event.target.files[0]; // Obtiene el primer archivo seleccionado
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageSrc = e.target.result; // Actualiza la imagen de perfil con la nueva imagen seleccionada
      };
      reader.readAsDataURL(file); // Lee el archivo como una URL de datos
    }
  }

  salir() {
    // Aquí puedes agregar la lógica para cerrar sesión
    console.log('Cerrando sesión...');
  }

  openSubscriptionModal() {
    this.subscriptionModal.present(); // Muestra el modal
  }
}
