import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {EstudianteService} from '../../services/estudiante.service'
import { Estudiante } from 'src/app/models/estudiante';

@Component({
  selector: 'app-stud-form',
  templateUrl: './stud-form.component.html',
  styleUrls: ['./stud-form.component.css']
})
export class StudFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  estudiante: Estudiante ={
    id_estudiante: 0,
    stud_nombre: "",
    stud_apellido: "",
    stud_email: "",
    contrasena: ""
  }

  constructor(private estudiantesService: EstudianteService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
  }


  probando(){
    console.log(this.estudiante);
    this.estudiantesService.guardarEstudiante(this.estudiante)
    .subscribe(
      res => {
        console.log(res);
        alert("Felicidades! Ahora estás registrado :D");
       this.router.navigate(['login']); 
      },
      err => {
        document.getElementById('lblName').innerHTML = "Algo ha pasado. Revisa los datos!!";
        console.error(err)
      }
    )
  }

}
