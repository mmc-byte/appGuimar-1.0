import { Routes } from '@angular/router';


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
      { path: 'perfil', loadComponent: () => import('./Perfil-total/perfil/perfil.page').then(m => m.PerfilPage) },
    ]
  },
  {
    path: 'h-sinconexion',
    loadComponent: () => import('./h-sinconexion/h-sinconexion.page').then( m => m.HSinconexionPage)
  },
  {
    path: 'certificados',
    loadComponent: () => import('./Perfil-total/Modales/certificados/certificados.page').then( m => m.CertificadosPage)
  },
  {
    path: 'modal-infopersonal',
    loadComponent: () => import('./Perfil-total/Modales/modal-infopersonal/modal-infopersonal.page').then( m => m.ModalInfopersonalPage)
  },
  {
    path: 'notificaciones',
    loadComponent: () => import('./Perfil-total/Modales/notificaciones/notificaciones.page').then( m => m.NotificacionesPage)
  },
  {
    path: 'becas',
    loadComponent: () => import('./Perfil-total/Modales/becas/becas.page').then( m => m.BecasPage)
  },
  {
    path: 'carrito',
    loadComponent: () => import('./Perfil-total/Modales/carrito/carrito.page').then( m => m.CarritoPage)
  },
  {
    path: 'historial',
    loadComponent: () => import('./Perfil-total/Modales/historial/historial.page').then( m => m.HistorialPage)
  },



];
