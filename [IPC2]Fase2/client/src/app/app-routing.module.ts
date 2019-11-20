import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AuxListComponent} from './components/aux-list/aux-list.component';
import {LoginComponent} from './components/login/login.component'
import { StudListComponent } from './components/stud-list/stud-list.component'
import {AuxFormComponent} from './components/aux-form/aux-form.component'
import {AdminMainComponent} from './components/admin-main/admin-main.component'
import {StudMainComponent} from './components/stud-main/stud-main.component'
import {AuxMainComponent} from './components/aux-main/aux-main.component'
import {StudFormComponent} from './components/stud-form/stud-form.component'
import {CursoFormComponent} from './components/curso-form/curso-form.component'
import {CursoListComponent} from './components/curso-list/curso-list.component'
import {SeccFormComponent} from './components/secc-form/secc-form.component'
import {SeccListComponent} from './components/secc-list/secc-list.component'
import {StudAsignacionComponent} from './components/stud-asignacion/stud-asignacion.component'
import {StudMiscursosComponent} from './components/stud-miscursos/stud-miscursos.component'
import {AuxListAsignacionComponent} from './components/aux-list-asignacion/aux-list-asignacion.component'
import {TicketListComponent} from './components/ticket-list/ticket-list.component' 
import {TicketFormComponent} from './components/ticket-form/ticket-form.component'
import {AuxVerComponent} from './components/aux-ver/aux-ver.component'
import { AdminAsignListComponent } from './components/admin-asign-list/admin-asign-list.component';
import { AdminTicketListComponent } from './components/admin-ticket-list/admin-ticket-list.component';

const routes: Routes = [
  {
     path: '',
     redirectTo: '/login',
     pathMatch: 'full'
     // esto solo es en el default
  },
   {
    path: 'estudiante',
    component: StudMainComponent
  },
  {
    path: 'estudiante/asignacion',
    component: StudAsignacionComponent
  },
  {
    path: 'estudiante/cursos',
    component: StudMiscursosComponent
  },
  {
    path: 'estudiante/tickets',
    component: TicketListComponent
  },
  {
    path: 'estudiante/tickets/agregar/:id',
    component: TicketFormComponent
  },
  {
    path: 'registro',
    component: StudFormComponent
  },
  {
    path: 'auxiliar',
    component: AuxMainComponent
  },
  {
    path: 'admin',
    component: AdminMainComponent
  },
  {
    path: 'admin/secciones',
    component:SeccListComponent
  },
  {
    path: 'admin/consultas/asignaciones',
    component:AdminAsignListComponent
  },
  {
    path: 'admin/consultas/tickets',
    component:AdminTicketListComponent
  },
  {
    path: 'admin/secciones/agregar/:id',
    component:SeccFormComponent
  },
  {
    path: 'admin/secciones/editar/:id',
    component:SeccFormComponent
  },
  {
    path: 'admin/cursos',
    component: CursoListComponent
  },
  {
    path: 'admin/cursos/agregar',
    component: CursoFormComponent
  },
  {
    path: 'admin/cursos/editar/:id',
    component: CursoFormComponent
  },
  {
    path: 'admin/auxiliares',
    component:AuxListComponent
  },
  {
    path: 'admin/auxiliares/ver/:id',
    component: AuxVerComponent
  },
  {
    path: 'admin/estudiantes',
    component: StudListComponent
  },
  {
    path: 'admin/auxiliares/agregar',
    component: AuxFormComponent
  },
  {
    path: 'admin/auxiliares/editar/:id',
    component: AuxFormComponent
  },
  {
    path: 'admin/cursos/asignar-auxiliar',
    component: AuxListAsignacionComponent
  },
  {
    path: 'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
