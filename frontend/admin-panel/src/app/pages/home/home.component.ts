import { Component, OnInit } from '@angular/core';
import { PruebaService } from '../../services/prueba.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  users: any[] = [];
  constructor(private pruebaService: PruebaService) { }

  ngOnInit(): void {
    this.pruebaService.getUsers().subscribe((data) => {
      this.users = data.users;
    });
  }
}
