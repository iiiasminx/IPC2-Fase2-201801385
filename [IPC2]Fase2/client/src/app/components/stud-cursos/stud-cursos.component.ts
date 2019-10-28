import { Component, OnInit } from '@angular/core';

import { CursosService } from '../../services/cursos.service';
import { AsignacionesService } from '../../services/asignaciones.service'
import { SeccionesService } from '../../services/secciones.service';

import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-stud-cursos',
  templateUrl: './stud-cursos.component.html',
  styleUrls: ['./stud-cursos.component.css']
})
export class StudCursosComponent implements OnInit {

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

    console.log("ya entré");
    this.cursosService.getCursos().subscribe(
      res => {
        this.cursos = res;
        console.log(res[1]);
        console.log(this.cursos[1]);
      },
      err => console.error(err)
    )
  }

}
