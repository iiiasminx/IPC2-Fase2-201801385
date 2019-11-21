import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuxCrearExamenPageRoutingModule } from './aux-crear-examen-routing.module';

import { AuxCrearExamenPage } from './aux-crear-examen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuxCrearExamenPageRoutingModule
  ],
  declarations: [AuxCrearExamenPage]
})
export class AuxCrearExamenPageModule {}
