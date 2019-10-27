import { Component, OnInit } from '@angular/core';
import {SeccionesService} from '../../services/secciones.service'
import { Asignacion } from 'src/app/models/asignacion';

import {AsignacionesService} from '../../services/asignaciones.service'

@Component({
  selector: 'app-stud-asignacion',
  templateUrl: './stud-asignacion.component.html',
  styleUrls: ['./stud-asignacion.component.css']
})
export class StudAsignacionComponent implements OnInit {

  secciones: any = []

asignacion: Asignacion = {
  id_estudiante: +sessionStorage.getItem('usuario'),
  id_seccion:0
}
  constructor(private seccionesservice: SeccionesService,
    private asignacionesService: AsignacionesService) { 

  }

  ngOnInit() {
    this.obteniendoJuegos();
  }

  obteniendoJuegos(){
    this.seccionesservice.getSecciones().subscribe(
      res => {
        console.log(res);
        this.secciones = res;
      },
      err => console.error(err)
      
    )
  }

  asignando(id : number){
    let id_stud = sessionStorage.getItem('usuario');

    console.log('seccion'+ id);
    this.asignacion.id_seccion = id

    this.asignacionesService.guardarAsign(this.asignacion).subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    )
  }

    
  }


