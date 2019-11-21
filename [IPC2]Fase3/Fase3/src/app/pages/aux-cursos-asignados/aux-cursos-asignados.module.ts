import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuxCursosAsignadosPageRoutingModule } from './aux-cursos-asignados-routing.module';

import { AuxCursosAsignadosPage } from './aux-cursos-asignados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuxCursosAsignadosPageRoutingModule
  ],
  declarations: [AuxCursosAsignadosPage]
})
export class AuxCursosAsignadosPageModule {}
