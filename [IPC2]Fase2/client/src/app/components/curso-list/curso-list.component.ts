import { Component, OnInit } from '@angular/core';

import { CursosService } from '../../services/cursos.service';
import { AsignacionesService } from '../../services/asignaciones.service'
import { SeccionesService } from '../../services/secciones.service';

import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css']
})
export class CursoListComponent implements OnInit {

  cursos: any = []
  asignaciones: any = []
  secciones: any = []

  curso: Curso = {
    id_curso: 0,
    cur_nombre: "",
    cur_semestre: 0,
    cur_year: 0
  }

  constructor(private cursosService: CursosService,
    private asignacionservice: AsignacionesService,
    private seccionesservice: SeccionesService) { }

  ngOnInit() {
    this.obteniendoJuegos();
  }

  obteniendoJuegos() {
    this.cursosService.getCursos().subscribe(
      res => {
        //console.log(res);
        this.cursos = res;
      },
      err => console.error(err)
    )

    this.asignacionservice.getAsigns().subscribe(
      res => {
        this.asignaciones = res;
      },
      err => console.error(err)
    )

    this.seccionesservice.getSecciones().subscribe(
      res => {
        this.secciones = res;
      },
      err => console.error(err)
    )
  }

  eliminando(id: number) {

    let sid = id.toString();
    console.log("id del curso: " + sid);

    let ningunoasignado = true;

    for (let secioon of this.secciones) {
      if (secioon.id_curso == id) {
        //alert("hay una seccion en el curso");
        
        for(let asignacioon of this.asignaciones){
          if(asignacioon.id_seccion == secioon.id_seccion){            
            ningunoasignado = false;
          }
        }
      }
    }

    if(ningunoasignado == false){
      alert("Hay alumanos asignados a este curso!! D:")
    }

    if (ningunoasignado) {
      this.cursosService.eliminarCurso(sid).subscribe(
        res => {
          console.log(res);
          this.obteniendoJuegos();
        },
        err => console.error(err)
      )
    }
  }

}
