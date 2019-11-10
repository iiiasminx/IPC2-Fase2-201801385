import { Component, OnInit } from '@angular/core';

import { SeccionesService } from '../../services/secciones.service'
import { AuxiliaresService } from '../../services/auxiliares.service'
import { Seccion } from 'src/app/models/seccion';

@Component({
  selector: 'app-secc-list',
  templateUrl: './secc-list.component.html',
  styleUrls: ['./secc-list.component.css']
})
export class SeccListComponent implements OnInit {

  secciones: any = []
  constructor(private seccionesservice: SeccionesService) { }

  ngOnInit() {
    this.obteniendoJuegos();
  }

  filtropost = '';
  obteniendoJuegos() {
    this.seccionesservice.getSecciones().subscribe(
      res => {
        console.log(res);
        this.secciones = res;
      },
      err => console.error(err)
    )
  }

  eliminando(id: number) {
    let sid = id.toString();
    console.log(sid);
    this.seccionesservice.eliminarSeccion(sid).subscribe(
      res => {
        console.log(res);
        this.obteniendoJuegos();
      },
      err => console.error(err)
    )
  }

  eliminandoAux(id: string) {

    var person = prompt("¿Por que quieres desasignar al auxiliar? D:", "");

    if (person == null || person == "") {
      alert("por favor dame una razón :c")
    } else {
      this.seccionesservice.desasignarAuxdeClase(id).subscribe(
        res => {
          console.log(res);
          this.obteniendoJuegos();
        },
        err => console.error(err)
      )
    }
  }


}
