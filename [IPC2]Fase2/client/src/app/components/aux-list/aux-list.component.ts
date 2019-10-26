import { Component, OnInit } from '@angular/core';

import {AuxiliaresService} from '../../services/auxiliares.service';
import { Auxiliar } from 'src/app/models/auxiliar';

@Component({
  selector: 'app-aux-list',
  templateUrl: './aux-list.component.html',
  styleUrls: ['./aux-list.component.css']
})
export class AuxListComponent implements OnInit {

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

  eliminando(id : number){
    let sid = id.toString();
    console.log(sid);
    this.auxiliaresService.eliminarAuxiliar(sid).subscribe(
      res => {
        console.log(res);
        this.obteniendoJuegos();
      },
      err => console.error(err)
    )
  }


}
