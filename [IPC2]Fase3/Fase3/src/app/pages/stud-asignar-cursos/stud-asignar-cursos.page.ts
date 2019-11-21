import { Component, OnInit } from '@angular/core';
import { SeccionesService } from '../../services/secciones.service'
import { Asignacion } from 'src/app/models/asignacion';

import { AsignacionesService } from '../../services/asignaciones.service'


@Component({
  selector: 'app-stud-asignar-cursos',
  templateUrl: './stud-asignar-cursos.page.html',
  styleUrls: ['./stud-asignar-cursos.page.scss'],
})
export class StudAsignarCursosPage implements OnInit {

  secciones: any = []
  asignaciones: any = [];

  asignacion: Asignacion = {
    id_estudiante: +sessionStorage.getItem('usuario'),
    id_seccion: 1
  }
  constructor(private seccionesservice: SeccionesService,
    private asignacionesService: AsignacionesService) {

  }

  ngOnInit() {
    this.obteniendoJuegos();
  }

  obteniendoJuegos() {

    this.seccionesservice.getSecciones().subscribe(
      res => {
        console.log(res);
        this.secciones = res;
      },
      err => console.error(err)

    )

    this.asignacionesService.getAsigns().subscribe(
      res => {
        console.log(res);
        this.asignaciones = res;
      },
      err => console.error(err)

    )
  }

  asignando(id: number) {

    let cursoasignadounavez = true;
    let micarnet = +sessionStorage.getItem('usuario')

    for(let asignacioon of this.asignaciones){
        if(micarnet == asignacioon.id_estudiante){
          if(id == asignacioon.id_seccion){
            alert("ya te asignaste este curso");
            cursoasignadounavez = false;
          }
          
        }
    }

    if (cursoasignadounavez) {

      console.log("id de seccion: "  +  id);
      this.asignacion.id_seccion = id;
      console.log("estoy metiendo: ");
      console.log(this.asignacion);
     this.asignacionesService.guardarAsign(this.asignacion).subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)

     )
     window.location.reload();
    }
  }

}
