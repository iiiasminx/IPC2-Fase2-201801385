import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudMainPage } from './stud-main.page';

const routes: Routes = [
  {
    path: '',
    component: StudMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudMainPageRoutingModule {}
