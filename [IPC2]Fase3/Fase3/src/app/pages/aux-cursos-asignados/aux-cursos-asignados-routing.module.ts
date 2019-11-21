import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuxCursosAsignadosPage } from './aux-cursos-asignados.page';

const routes: Routes = [
  {
    path: '',
    component: AuxCursosAsignadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuxCursosAsignadosPageRoutingModule {}
