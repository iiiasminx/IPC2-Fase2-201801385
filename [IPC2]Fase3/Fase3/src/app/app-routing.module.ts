import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http'; 

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'no-password',
    loadChildren: () => import('./pages/no-password/no-password.module').then( m => m.NoPasswordPageModule)
  },
  {
    path: 'aux-main',
    loadChildren: () => import('./pages/aux-main/aux-main.module').then( m => m.AuxMainPageModule)
  },
  {
    path: 'stud-main',
    loadChildren: () => import('./pages/stud-main/stud-main.module').then( m => m.StudMainPageModule)
  },
  {
    path: 'stud-asignar-cursos',
    loadChildren: () => import('./pages/stud-asignar-cursos/stud-asignar-cursos.module').then( m => m.StudAsignarCursosPageModule)
  },
  {
    path: 'stud-cursos-asignados',
    loadChildren: () => import('./pages/stud-cursos-asignados/stud-cursos-asignados.module').then( m => m.StudCursosAsignadosPageModule)
  },
  {
    path: 'stud-crear-ticket',
    loadChildren: () => import('./pages/stud-crear-ticket/stud-crear-ticket.module').then( m => m.StudCrearTicketPageModule)
  },
  {
    path: 'stud-crear-ticket/:id',
    loadChildren: () => import('./pages/stud-crear-ticket/stud-crear-ticket.module').then( m => m.StudCrearTicketPageModule)
  },
  {
    path: 'stud-lista-tickets',
    loadChildren: () => import('./pages/stud-lista-tickets/stud-lista-tickets.module').then( m => m.StudListaTicketsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
