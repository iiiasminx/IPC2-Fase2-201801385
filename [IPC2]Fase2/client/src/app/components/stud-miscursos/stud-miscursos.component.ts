import { Component, OnInit } from '@angular/core';

import {AsignacionesService} from '../../services/asignaciones.service'
import {} from '../../services/secciones.service'


@Component({
  selector: 'app-stud-miscursos',
  templateUrl: './stud-miscursos.component.html',
  styleUrls: ['./stud-miscursos.component.css']
})
export class StudMiscursosComponent implements OnInit {

  asignaciones: any = [];

  constructor(private asignacionesServices: AsignacionesService) { }

  ngOnInit() {
    this.obteniendoJuegos();
  }

  obteniendoJuegos(){
    let esteUsuario =  sessionStorage.getItem('usuario');
    this.asignacionesServices.getAsignporAuxiliar(esteUsuario).subscribe(
      res => {
        console.log(res);
        this.asignaciones = res;
      },
      err => console.error(err)
    )
  }

  eliminando(id:string){
    
  }

}


