import { Routes } from '@angular/router';

<<<<<<< HEAD
=======

>>>>>>> pizarro
export const routes: Routes = [
  { path: '', loadComponent: () => import('./main/main.page').then(m => m.MainPage) },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'registrarse',
    loadComponent: () => import('./registrarse/registrarse.page').then(m => m.RegistrarsePage)
  },
  {
    path: 'cuerpo-app',
    loadComponent: () => import('./cuerpo-app/cuerpo-app.page').then(m => m.CuerpoAppPage),
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirige a la ruta de home al cargar cuerpo-app
      { path: 'home', loadComponent: () => import('./home/home.page').then(m => m.HomePage) },
      { path: 'explorar', loadComponent: () => import('./explorar/explorar.page').then(m => m.ExplorarPage) },
      { path: 'rutas', loadComponent: () => import('./rutas/rutas.page').then(m => m.RutasPage) },
      { path: 'perfil', loadComponent: () => import('./perfil/perfil.page').then(m => m.PerfilPage) },
    ]
  },
  {
    path: 'h-sinconexion',
    loadComponent: () => import('./h-sinconexion/h-sinconexion.page').then( m => m.HSinconexionPage)
  },  {
<<<<<<< HEAD
    path: 'scubi',
    loadComponent: () => import('./scubi/scubi.page').then( m => m.ScubiPage)
=======
    path: 'certificados',
    loadComponent: () => import('./certificados/certificados.page').then( m => m.CertificadosPage)
>>>>>>> pizarro
  },

];
