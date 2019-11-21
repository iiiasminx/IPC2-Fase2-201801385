import { Component, OnInit } from '@angular/core';

import {AsignacionesService} from '../../services/asignaciones.service'
import {SeccionesService} from '../../services/secciones.service'

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stud-cursos-asignados',
  templateUrl: './stud-cursos-asignados.page.html',
  styleUrls: ['./stud-cursos-asignados.page.scss'],
})
export class StudCursosAsignadosPage implements OnInit {
  missecciones: any = [];

  constructor(private asignacionesServices: AsignacionesService,
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
  
  ticket(id:string){

    sessionStorage.setItem('idseccion_ticket',id);
    console.log("voy a hacer un ticket en la sección: " + sessionStorage.getItem("idseccion_ticket"));
    this.router.navigate(['/stud-crear-ticket']);  

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
