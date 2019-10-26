import { Component, OnInit } from '@angular/core';
import {CursosService} from '../../services/cursos.service';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css']
})
export class CursoListComponent implements OnInit {

  cursos: any = []
  constructor(private cursosService: CursosService) { }

  ngOnInit() {    
    this.obteniendoJuegos();
  }

  obteniendoJuegos(){
    this.cursosService.getCursos().subscribe(
      res => {
        console.log(res);
        this.cursos = res;
      },
      err => console.error(err)
    )
  }

  eliminando(id : number){
    let sid = id.toString();
    console.log(sid);
    this.cursosService.eliminarCurso(sid).subscribe(
      res => {
        console.log(res);
        this.obteniendoJuegos();
      },
      err => console.error(err)
    )
  }

}
