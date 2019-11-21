import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudCrearTicketPageRoutingModule } from './stud-crear-ticket-routing.module';

import { StudCrearTicketPage } from './stud-crear-ticket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudCrearTicketPageRoutingModule
  ],
  declarations: [StudCrearTicketPage]
})
export class StudCrearTicketPageModule {}
