import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AuxFormComponent } from './components/aux-form/aux-form.component';
import { AuxListComponent } from './components/aux-list/aux-list.component';

import {AuxiliaresService} from './services/auxiliares.service';
import { LoginComponent } from './components/login/login.component';
import { StudListComponent } from './components/stud-list/stud-list.component';
import { AdminMainComponent } from './components/admin-main/admin-main.component';

import {FormsModule} from '@angular/forms';
import { StudMainComponent } from './components/stud-main/stud-main.component';
import { AuxMainComponent } from './components/aux-main/aux-main.component';
import { StudFormComponent } from './components/stud-form/stud-form.component';
import { CursoFormComponent } from './components/curso-form/curso-form.component';
import { CursoListComponent } from './components/curso-list/curso-list.component';
import { SeccFormComponent } from './components/secc-form/secc-form.component';
import { SeccListComponent } from './components/secc-list/secc-list.component';
import { AuxAsignacionComponent } from './components/aux-asignacion/aux-asignacion.component';
import { StudAsignacionComponent } from './components/stud-asignacion/stud-asignacion.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { StudCursosComponent } from './components/stud-cursos/stud-cursos.component';
import { StudMiscursosComponent } from './components/stud-miscursos/stud-miscursos.component';
import { AuxListAsignacionComponent } from './components/aux-list-asignacion/aux-list-asignacion.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { AuxVerComponent } from './components/aux-ver/aux-ver.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AuxFormComponent,
    AuxListComponent,
    LoginComponent,
    StudListComponent,
    AdminMainComponent,
    StudMainComponent,
    AuxMainComponent,
    StudFormComponent,
    CursoFormComponent,
    CursoListComponent,
    SeccFormComponent,
    SeccListComponent,
    AuxAsignacionComponent,
    StudAsignacionComponent,
    FiltroPipe,
    FilterPipe,
    StudCursosComponent,
    StudMiscursosComponent,
    AuxListAsignacionComponent,
    TicketFormComponent,
    TicketListComponent,
    AuxVerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuxiliaresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
