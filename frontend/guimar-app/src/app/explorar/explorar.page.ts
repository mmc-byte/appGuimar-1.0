import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
>>>>>>> pizarro

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.page.html',
  styleUrls: ['./explorar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class ExplorarPage implements OnInit {
  items: string[] = [];
<<<<<<< HEAD

  ngOnInit() {
    for (let i = 1; i < 100; i++) {
      this.items.push(`Curso de Programación en N° ${i}`);
    }
=======

  constructor(private router: Router) {}

  ngOnInit() {
    for (let i = 1; i < 100; i++) {
      this.items.push(`Curso de Programación en N° ${i}`);
    }
  }

  irAPerfil() {
    this.router.navigate(['/cuerpo-app/perfil']);
>>>>>>> pizarro
  }
}
