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

  cursos: any = [];
  secciones: any = [];

  constructor(private seccionesservice: SeccionesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cursosService: CursosService) { }


  ngOnInit() {
    this.obteniendoJuegos();
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



  probando() {
    
    let nombreSeccionOriginal = true;

    
    for(let secioon of this.secciones){
      //console.log("comparando " + secioon.id_curso + "con " + this.curso.id_curso);
      if(secioon.id_curso == this.curso.id_curso){
        //console.log("ya hay una seccion del curso")
        if(secioon.sec_nombre == this.seccion.sec_nombre){
          console.log("comparando " + secioon.sec_nombre + "con " + this.seccion.sec_nombre);
          console.log("ya hay una seccion con el mismo nombre :C ")
          nombreSeccionOriginal = false;
        }
      }

    }
    

    if (nombreSeccionOriginal) {
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
    } else {
      alert("ya hay una seción con este nombre :C");
    }
  }

  //ESTO NO LO TOCO
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

  obteniendoJuegos(){
    this.cursosService.getCursos().subscribe(
      res => {
        //console.log(res);
        this.cursos = res;
      },
      err => console.error(err)
    )

    this.seccionesservice.getSecciones().subscribe(
      res => {
        console.log(res);
        this.secciones = res;
      },
      err => console.error(err)
    )

  }

}
