import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudCursosAsignadosPage } from './stud-cursos-asignados.page';

const routes: Routes = [
  {
    path: '',
    component: StudCursosAsignadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudCursosAsignadosPageRoutingModule {}
