import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { create, ellipsisHorizontal, ellipsisVertical, helpCircle, personCircle, search, star } from 'ionicons/icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink ]
})
export class PerfilPage {
  imageSrc: string = 'assets/icon/hacker (1).svg';
  user = {
    name: 'Luis',
    lastName: 'Palomino',
    age: 20,
    address: 'Cisnes 165, Callao',
    username: 'Pafos',
    email: 'correo.com',
    phone: '(+51) 995954440'
  };

  editPhone: boolean = false;
  editEmail: boolean = false;
  editAddress: boolean = false;

  @ViewChild('subscriptionModal') subscriptionModal: any;

  constructor(private modalController: ModalController) {
    addIcons({ create, ellipsisHorizontal, ellipsisVertical, helpCircle, personCircle, search, star });
  }

  handleFileInput(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  salir() {
    console.log('Cerrando sesión...');
  }

  openSubscriptionModal() {
    this.subscriptionModal.present();
  }
}
