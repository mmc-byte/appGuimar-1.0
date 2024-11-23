import { Component } from '@angular/core';
import { Router, RouterLink} from '@angular/router';  // Importar el Router
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-modal-infopersonal',
  templateUrl: './modal-infopersonal.page.html',
  styleUrls: ['./modal-infopersonal.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class ModalInfopersonalPage {
  isModalOpen = false;

  // Datos ficticios del usuario para mostrar en el modal
  user = {
    name: 'Juan',
    lastName: 'Pérez',
    age: 30,
    address: 'Calle Falsa 123',
    email: 'juan.perez@example.com',
    phone: '+51 987654321'
  };

  // Variables para editar cada campo
  editAddress = false;
  editEmail = false;
  editPhone = false;

  constructor(private router: Router) {}  // Inyectamos el Router

  // Método para abrir o cerrar el modal
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  // Método para navegar a una nueva página
  navigateToProfile() {
    this.router.navigate(['/perfil']);  // Redirige a la ruta '/perfil'
  }
}
