import { Component, OnInit } from '@angular/core';

import {AsignacionesService} from '../../services/asignaciones.service'
import {SeccionesService} from '../../services/secciones.service'


@Component({
  selector: 'app-stud-miscursos',
  templateUrl: './stud-miscursos.component.html',
  styleUrls: ['./stud-miscursos.component.css']
})
export class StudMiscursosComponent implements OnInit {

  
  missecciones: any = [];

  constructor(private asignacionesServices: AsignacionesService,
    private seccionesService: SeccionesService) { }

  ngOnInit() {
    this.obteniendoJuegos();
  }

  obteniendoJuegos(){
    let esteUsuario =  sessionStorage.getItem('usuario');
    this.asignacionesServices.getAsignporEstudiante(esteUsuario).subscribe(
      res => {
        console.log(res[0]);
        this.missecciones = res[0];
        console.log(this.missecciones);
      }
    )

  }


  eliminando(id:string){
    if (window.confirm('¿Segur@ que quieres desasignarte?'))
    {
          this.asignacionesServices.eliminarAsign(id).subscribe(
          res => {
            console.log(res);
            this.obteniendoJuegos();
          },
          err => console.error(err)
        )
    }
    else
    {
        
    }

  }

}


