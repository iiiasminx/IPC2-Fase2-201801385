import { Component, OnInit } from '@angular/core';

import {SeccionesService} from '../../services/secciones.service'
import {AuxiliaresService} from '../../services/auxiliares.service'
import {AsignacionesService} from '../../services/asignaciones.service'

@Component({
  selector: 'app-admin-asign-list',
  templateUrl: './admin-asign-list.component.html',
  styleUrls: ['./admin-asign-list.component.css']
})
export class AdminAsignListComponent implements OnInit {

  secciones: any = [];
  auxiliares: any = [];
  asignaciones: any = [];
  constructor(private seccionesService: SeccionesService, 
    private auxiliaresService: AuxiliaresService, 
    private asignacionesservice: AsignacionesService) { }

 

    filterPost1 = '';

  ngOnInit() {
    this.obteniendoJuegos();
  }
  
  obteniendoJuegos(){

    this.asignacionesservice.getTodo().subscribe(
      res => {
        console.log(res[0]);
        this.asignaciones = res[0];
      },
      err => console.error(err)
    )
  }



}
