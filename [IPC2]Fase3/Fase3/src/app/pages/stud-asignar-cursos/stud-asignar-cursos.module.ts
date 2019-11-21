import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudAsignarCursosPageRoutingModule } from './stud-asignar-cursos-routing.module';

import { StudAsignarCursosPage } from './stud-asignar-cursos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudAsignarCursosPageRoutingModule
  ],
  declarations: [StudAsignarCursosPage]
})
export class StudAsignarCursosPageModule {}
