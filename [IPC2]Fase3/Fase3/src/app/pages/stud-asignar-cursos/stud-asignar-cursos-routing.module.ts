import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudAsignarCursosPage } from './stud-asignar-cursos.page';

const routes: Routes = [
  {
    path: '',
    component: StudAsignarCursosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudAsignarCursosPageRoutingModule {}
