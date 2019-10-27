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


  cursos: any = [];
  asignaciones: any = [];
  secciones: any = [];

  miscursos: any =[]
  misasignaciones: any=[]
  misSecciones: any=[]

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
      this.iniciando();
    }

    obteniendoJuegos() {
      this.cursosService.getCursos().subscribe(
        res => {
          console.log("cursos")          
          this.cursos = res;
          console.log(this.cursos);
        },
        err => console.error(err)
      )
      this.asignacionservice.getAsigns().subscribe(
        res => {
          console.log("asignaciones")          
          this.asignaciones = res[0];
          console.log(this.asignaciones);
        },
        err => console.error(err)
      )
  
      this.seccionesservice.getSecciones().subscribe(
        res => {
          console.log("secciones")
          
          this.secciones = res;
          console.log(this.secciones);
        },
        err => console.error(err)
      )

      console.log(this.asignaciones[1])
      

    }

    iniciando(){     
      
      for(let seccion of this.secciones){
        console.log(seccion);
      }

      for(let asignacioon of this.asignaciones){
        console.log("en el for")
        console.log(asignacioon.id_estudiante + "comparando con" + sessionStorage.getItem('usuario').toString())
        if(asignacioon.id_estudiante.toString() == sessionStorage.getItem('usuario').toString()){
          this.misasignaciones.push(asignacioon);
          console.log("nuevaAsignacion")
          console.log(this.misasignaciones);
          for(let secioon of this.secciones){
            if(asignacioon.id_seccion.toString() == secioon.id_seccion.toString()){
              this.misSecciones.push(secioon);              
            }
          }
        }
      }
      console.log(this.misSecciones);
    }




}
