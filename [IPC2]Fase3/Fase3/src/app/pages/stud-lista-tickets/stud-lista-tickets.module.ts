import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudListaTicketsPageRoutingModule } from './stud-lista-tickets-routing.module';

import { StudListaTicketsPage } from './stud-lista-tickets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudListaTicketsPageRoutingModule
  ],
  declarations: [StudListaTicketsPage]
})
export class StudListaTicketsPageModule {}
