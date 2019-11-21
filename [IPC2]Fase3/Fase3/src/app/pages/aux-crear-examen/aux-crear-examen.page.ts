import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {ExamenesService} from '../../services/examenes.service'
import {Examen} from 'src/app/models/examen'

@Component({
  selector: 'app-aux-crear-examen',
  templateUrl: './aux-crear-examen.page.html',
  styleUrls: ['./aux-crear-examen.page.scss'],
})
export class AuxCrearExamenPage implements OnInit {

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private examenService: ExamenesService) { }

    examen: Examen ={
      ex_nombre: '',
      ex_habilitado: 0,
      id_curso: 0
    }
    
  ngOnInit() {
    this.examen.id_curso = +sessionStorage.getItem("idseccion_exam");
  }

  probando(){
    console.log(this.examen);
    this.examenService.guardarrExamen(this.examen)
    .subscribe(
      res => {
        console.log(res);
        if (confirm("Tu examen ha sido creado con éxito :D \br quieres agregar preguntas?")) {
          
          this.examenService.getExamenPorNombre(this.examen.ex_nombre).subscribe();

          sessionStorage.setItem("idexam_pregs", this.examen.id_evaluacion.toString());
        } else {
          this.router.navigate(['/aux-main']);
        }
        //this.router.navigate(['/stud-main']);
      },
      err => {
        document.getElementById('lblName').innerHTML = "Algo ha pasado. Revisa los datos!!";
        console.error(err)
      }
    )
  }


}
