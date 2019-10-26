import { Component, OnInit, HostBinding } from '@angular/core';
import { Seccion } from 'src/app/models/seccion';

import { SeccionesService } from '../../services/secciones.service';
import {CursosService} from '../../services/cursos.service'
import { Router, ActivatedRoute } from '@angular/router';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-secc-form',
  templateUrl: './secc-form.component.html',
  styleUrls: ['./secc-form.component.css']
})
export class SeccFormComponent implements OnInit {


  @HostBinding('class') classes = 'row';
 
  seccion: Seccion = {
    //id_seccion: 0,
    sec_nombre: "",
    sec_horario: "",
    id_curso: this.activatedRoute.snapshot.params.id
  };

  curso: Curso={
    id_curso: 0,
    cur_nombre: "",
    cur_semestre: 0,
    cur_year: 0  
  }
  edit: boolean = false;

  constructor(private seccionesservice: SeccionesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cursosService: CursosService) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if(params.id){
      this.cursosService.getCurso(params.id)
      .subscribe(
        res => {
          this.curso = res[0];
          console.log(this.curso);
        },
        err => console.error(err)
      )
    }
  }



  probando(){
    console.log(this.seccion);
    this.seccionesservice.guardarSeccion(this.seccion)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/admin/cursos']);
      },
      err => {
        document.getElementById('lblName').innerHTML = "Algo ha pasado. Revisa los datos!!";
        console.error(err)
      }
    )
  }

  updatear(){
    console.log(this.seccion);
    this.seccionesservice.updateSeccion(this.seccion.id_seccion.toString(), this.seccion)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/admin/secciones']);
      },
      err => {
        document.getElementById('lblName').innerHTML = "Algo ha pasado. Revisa los datos!!";
        console.error(err)
      }
    )
  }

}
