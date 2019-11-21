import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuxMainPageRoutingModule } from './aux-main-routing.module';

import { AuxMainPage } from './aux-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuxMainPageRoutingModule
  ],
  declarations: [AuxMainPage]
})
export class AuxMainPageModule {}
