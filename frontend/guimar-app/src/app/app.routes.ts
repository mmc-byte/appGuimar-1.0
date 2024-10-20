import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'mi-aprendizaje',
    loadComponent: () => import('./mi-aprendizaje/mi-aprendizaje.page').then( m => m.MiAprendizajePage)
  },
  {
    path: 'pagina-prueba',
    loadComponent: () => import('./pagina-prueba/pagina-prueba.page').then( m => m.PaginaPruebaPage)
  }
];
