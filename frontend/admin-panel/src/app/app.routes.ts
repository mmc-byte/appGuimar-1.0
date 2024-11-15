import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () =>import ('./Dashbaord/layout/layout.component'),
    children: [

//Rutas de las Paginas
      {
        path: 'vista',
        loadComponent: () => import('./Paginas/vista/vista.component')

      },

      {
        path: 'mensajeria',
        loadComponent: () => import('./Paginas/mensajeria/mensajeria.component')

      },
      {
        path: 'cursos',
        loadComponent: () => import('./Paginas/cursos/cursos.component')

      },
      {
        path: 'becas',
        loadComponent: () => import('./Paginas/becas/becas.component')

      },
      {
        path: 'pagos',
        loadComponent: () => import('./Paginas/pagos/pagos.component')

      },
      {
        path: 'gestion-user',
        loadComponent: () => import('./Paginas/gestion-user/gestion-user.component')

      },

//Ruta Directa del la vista principal del Dashboard

      {
        path: '',
        redirectTo: 'vista',
        pathMatch: 'full'
      }


    ]


  },

  {
    path: '**',
    redirectTo: 'vista',
    pathMatch:'full'
  }




];
