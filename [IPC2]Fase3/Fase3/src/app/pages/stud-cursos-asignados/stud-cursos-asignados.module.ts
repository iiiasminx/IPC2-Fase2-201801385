import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudCursosAsignadosPageRoutingModule } from './stud-cursos-asignados-routing.module';

import { StudCursosAsignadosPage } from './stud-cursos-asignados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudCursosAsignadosPageRoutingModule
  ],
  declarations: [StudCursosAsignadosPage]
})
export class StudCursosAsignadosPageModule {}
