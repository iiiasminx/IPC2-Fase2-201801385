import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudCrearTicketPage } from './stud-crear-ticket.page';

const routes: Routes = [
  {
    path: '',
    component: StudCrearTicketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudCrearTicketPageRoutingModule {}
