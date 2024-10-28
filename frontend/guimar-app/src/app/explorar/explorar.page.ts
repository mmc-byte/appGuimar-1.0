import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

interface Course {
  id: number;
  title: string;
  imageUrl: string;
  instructor: string;
  ageRange: string;
  type: 'course' | 'route' | 'class';
  rating: number;
  category: string;
}

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.page.html',
  styleUrls: ['./explorar.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExplorarPage implements OnInit {
  public selectedType: string = 'all';
  public selectedAge: string = 'all';
  public searchTerm: string = '';

  public allCourses: Course[] = [
    {
      id: 1,
      title: 'Programacion en python',
      imageUrl: '/assets/python.jpg',
      instructor: 'Prof. Cordova',
      ageRange: '10-18',
      type: 'course',
      rating: 4.5,
      category: 'Programación'
    },
    {
      id: 2,
      title: 'Programacion en java',
      imageUrl: '/assets/java.jpg',
      instructor: 'Prof. Soto',
      ageRange: '18+',
      type: 'course',
      rating: 4.8,
      category: 'Programación'
    },
    {
      id: 3,
      title: 'Programacion en java',
      imageUrl: '/assets/java.jpg',
      instructor: 'Prof. Soto',
      ageRange: '18+',
      type: 'course',
      rating: 4.8,
      category: 'Programación'
    },
    {
      id: 4,
      title: 'Programacion en java',
      imageUrl: '/assets/java.jpg',
      instructor: 'Prof. Soto',
      ageRange: '18+',
      type: 'course',
      rating: 4.8,
      category: 'Programación'
    },

  ];

  public filteredCourses: Course[] = [];
  constructor() {
    this.filteredCourses = [...this.allCourses];
  }

  ngOnInit() {
    this.filterContent();
  }
  handleInput(event: any) {
    this.searchTerm = event.target.value.toLowerCase();
    this.filterContent();
  }
  filterContent() {
    this.filteredCourses = this.allCourses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(this.searchTerm);
      const matchesType = this.selectedType === 'all' || course.type === this.selectedType;
      const matchesAge = this.selectedAge === 'all' || course.ageRange === this.selectedAge;

      return matchesSearch && matchesType && matchesAge;
    });
  }
}
