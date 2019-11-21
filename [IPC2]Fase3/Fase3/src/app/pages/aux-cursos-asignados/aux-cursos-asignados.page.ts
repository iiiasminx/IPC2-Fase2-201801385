import { Component, OnInit } from '@angular/core';

import {AsigncionesAuxService} from '../../services/asignciones-aux.service'
import {SeccionesService} from '../../services/secciones.service'

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aux-cursos-asignados',
  templateUrl: './aux-cursos-asignados.page.html',
  styleUrls: ['./aux-cursos-asignados.page.scss'],
})
export class AuxCursosAsignadosPage implements OnInit {


  missecciones: any = [];

  constructor(private asignacionesServices: AsigncionesAuxService,
    private seccionesService: SeccionesService, private router: Router) { }

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

  crearExamen(id: string){
    sessionStorage.setItem("idseccion_exam", id);
    this.router.navigate(['/aux-crear-examen']);  

}
}
