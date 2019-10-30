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


    nivelSeleccionado: string;

  ngOnInit() {
    this.obteniendoJuegos();
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

  ingresando(id_seccion: string, id_auxiliar: string){
    console.log(this.nivelSeleccionado);
    console.log('mi id es: ' +id_seccion + '');

    this.seccionesService.setearAuxiliar(id_seccion, id_auxiliar).subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    )

  }

  

}
