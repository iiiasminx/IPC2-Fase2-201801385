import { Component, OnInit } from '@angular/core';

import {EstudianteService} from '../../services/estudiante.service';
import { Estudiante } from 'src/app/models/estudiante';

@Component({
  selector: 'app-stud-list',
  templateUrl: './stud-list.component.html',
  styleUrls: ['./stud-list.component.css']
})
export class StudListComponent implements OnInit {

  estudiantes: any = []
  constructor(private estudiantesService: EstudianteService) { }

  ngOnInit() {
    this.estudiantesService.getEstudiantes().subscribe(
      res => {
        console.log(res);
        this.estudiantes = res;
      },
      err => console.error(err)
      )
    }
    

}
