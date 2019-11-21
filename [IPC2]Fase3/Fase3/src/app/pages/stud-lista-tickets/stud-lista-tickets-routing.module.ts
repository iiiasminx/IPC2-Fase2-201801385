import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudListaTicketsPage } from './stud-lista-tickets.page';

const routes: Routes = [
  {
    path: '',
    component: StudListaTicketsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudListaTicketsPageRoutingModule {}
