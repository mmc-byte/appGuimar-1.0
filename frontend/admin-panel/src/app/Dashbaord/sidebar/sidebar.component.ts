import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'; // Importar MatIconModule
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatIconModule,RouterLink, RouterLinkActive], // Importar el módulo de iconos
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
