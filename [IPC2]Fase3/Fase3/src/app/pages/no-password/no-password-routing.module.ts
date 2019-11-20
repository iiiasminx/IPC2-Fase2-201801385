import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoPasswordPage } from './no-password.page';

const routes: Routes = [
  {
    path: '',
    component: NoPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoPasswordPageRoutingModule {}
