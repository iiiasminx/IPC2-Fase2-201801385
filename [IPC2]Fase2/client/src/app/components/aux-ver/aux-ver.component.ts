import { Component, OnInit } from '@angular/core';

import { SeccionesService } from '../../services/secciones.service'
import { AuxiliaresService } from '../../services/auxiliares.service'
import { Seccion } from 'src/app/models/seccion';

import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-aux-ver',
  templateUrl: './aux-ver.component.html',
  styleUrls: ['./aux-ver.component.css']
})
export class AuxVerComponent implements OnInit {

  secciones: any = []
  constructor(private seccionesservice: SeccionesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.obteniendoJuegos();
  }

  obteniendoJuegos() {
    const params = this.activatedRoute.snapshot.params;
    this.seccionesservice.getCursosdeMiAuxiliar(params.id).subscribe(
      res => {
        console.log(res);
        this.secciones = res;
      },
      err => console.error(err)
    )
  }

  eliminando(id: string) {
    var person = prompt("¿Por que quieres desasignar al auxiliar? D:", "");

    if (person == null || person == "") {
      alert("por favor dame una razón :c")
    } else {
      
      this.seccionesservice.desasignarAuxdeClase(id).subscribe(
        res => {
          console.log(res);
        },
        err => console.error(err)
      )

     window.location.reload(); 
    }
  }

}
