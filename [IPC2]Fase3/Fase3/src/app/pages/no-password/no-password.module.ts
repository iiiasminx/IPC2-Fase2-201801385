import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoPasswordPageRoutingModule } from './no-password-routing.module';

import { NoPasswordPage } from './no-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoPasswordPageRoutingModule
  ],
  declarations: [NoPasswordPage]
})
export class NoPasswordPageModule {}
