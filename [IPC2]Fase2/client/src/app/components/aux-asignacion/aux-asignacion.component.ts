import { Component, OnInit } from '@angular/core';

import {AuxiliaresService} from '../../services/auxiliares.service';
import { Auxiliar } from 'src/app/models/auxiliar';

@Component({
  selector: 'app-aux-asignacion',
  templateUrl: './aux-asignacion.component.html',
  styleUrls: ['./aux-asignacion.component.css']
})
export class AuxAsignacionComponent implements OnInit {

  
  auxiliares: any = []
  constructor(private auxiliaresService: AuxiliaresService) { }

  ngOnInit() {
    this.obteniendoJuegos();
  }

  obteniendoJuegos(){
    this.auxiliaresService.getAuxiliares().subscribe(
      res => {
        console.log(res);
        this.auxiliares = res;
      },
      err => console.error(err)
    )
  }

}
