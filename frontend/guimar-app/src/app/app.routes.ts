import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: 'mi-aprendizaje',
    loadComponent: () => import('./mod-aprendizaje/mi-aprendizaje/mi-aprendizaje.page').then(m => m.MiAprendizajePage)
  },
  {
    path: 'explorar',
    loadComponent: () => import('./explorar/explorar.page').then( m => m.ExplorarPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./mod-acceso/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./mod-acceso/sign-up/sign-up.page').then(m => m.SignUpPage)
  },
  {
    path: 'welcome',
    loadComponent: () => import('./mod-acceso/welcome/welcome.page').then(m => m.WelcomePage)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./perfil/perfil.page').then( m => m.PerfilPage)
  },
  {
    path: 'load-screen',
    loadComponent: () => import('./mod-acceso/load-screen/load-screen.page').then(m => m.LoadScreenPage)
  }

];
