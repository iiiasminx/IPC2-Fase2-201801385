import { Component, OnInit, HostBinding  } from '@angular/core';
import { Curso } from 'src/app/models/curso';

import { CursosService } from '../../services/cursos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.css']
})
export class CursoFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';
 
  curso: Curso = {
    id_curso: 0,
    cur_nombre: "",
    cur_semestre: 0,
    cur_year: 0
  };
  edit: boolean = false;

  constructor(private cursosService: CursosService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
      const params = this.activatedRoute.snapshot.params;
      if(params.id){
        this.cursosService.getCurso(params.id)
        .subscribe(
          res => {
  
            this.curso = res[0];
            console.log(this.curso);
            this.edit = true;
          },
          err => console.error(err)
        )
      }
    }  
  
    probando(){
      console.log(this.curso);
      this.cursosService.guardarCurso(this.curso)
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
      console.log(this.curso);
      this.cursosService.updateCurso(this.curso.id_curso.toString(), this.curso)
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

}
