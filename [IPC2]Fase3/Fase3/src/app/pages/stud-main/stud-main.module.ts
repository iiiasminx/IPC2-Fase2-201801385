import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudMainPageRoutingModule } from './stud-main-routing.module';

import { StudMainPage } from './stud-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudMainPageRoutingModule
  ],
  declarations: [StudMainPage]
})
export class StudMainPageModule {}
