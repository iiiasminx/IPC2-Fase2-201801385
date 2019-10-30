import { Component, OnInit } from '@angular/core';

import {SeccionesService} from '../../services/secciones.service'
import {AuxiliaresService} from '../../services/auxiliares.service'

@Component({
  selector: 'app-aux-list-asignacion',
  templateUrl: './aux-list-asignacion.component.html',
  styleUrls: ['./aux-list-asignacion.component.css']
})
export class AuxListAsignacionComponent implements OnInit {

  secciones: any = [];
  auxiliares: any = [];
  constructor(private seccionesService: SeccionesService, 
    private auxiliaresService: AuxiliaresService) { }

  nivelSeleccionado;
  data:Array<Object> = [
      {id: 0, name: "Estudiante"},
      {id: 1, name: "Auxiliar"},
      {id: 2, name: "Administrador"}
  ];

  ngOnInit() {
    this.obteniendoJuegos();
    this.obteniendoNombres();
  }

  obteniendoNombres(){
    let datos:Array<Object> = []
    for(let auxiliar of this.auxiliares){
      
    }
  }

  obteniendoJuegos(){
    this.seccionesService.getSeccionsinAuxiliar().subscribe(
      res => {
        console.log(res);
        this.secciones = res;
      },
      err => console.error(err)
    )
    this.auxiliaresService.getAuxiliares().subscribe(
      res => {
        console.log(res);
        this.auxiliares = res;
      },
      err => console.error(err)
    )
  }

  

}
