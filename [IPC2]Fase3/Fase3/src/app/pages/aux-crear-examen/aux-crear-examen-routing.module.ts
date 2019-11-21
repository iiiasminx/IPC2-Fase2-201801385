import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuxCrearExamenPage } from './aux-crear-examen.page';

const routes: Routes = [
  {
    path: '',
    component: AuxCrearExamenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuxCrearExamenPageRoutingModule {}
