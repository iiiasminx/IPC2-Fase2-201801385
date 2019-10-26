import { Component, OnInit, HostBinding } from '@angular/core';
import { Auxiliar } from 'src/app/models/auxiliar';

import { AuxiliaresService } from '../../services/auxiliares.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aux-form',
  templateUrl: './aux-form.component.html',
  styleUrls: ['./aux-form.component.css']
})

export class AuxFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';
 
  auxiliar: Auxiliar = {
    id_auxiliar: 0,
    aux_nombre: "",
    aux_apellido: "",
    aux_email: "",
    contraseña: Math.random().toString(36).substring(7)
  };
  edit: boolean = false;

  constructor(private auxiliaresService: AuxiliaresService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {


  } 

/** ESTO ES LO QUE TENGO QUE VER AAAAAAHHHHH */
  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if(params.id){
      this.auxiliaresService.getAuxiliar(params.id).subscribe(
        res => {

          this.auxiliar = res[0];
          console.log(this.auxiliar);
          this.edit = true;
        },
        err => console.error(err)
      )
    }
  }  

  probando(){
    console.log(this.auxiliar);
    this.auxiliaresService.guardarAuxiliar(this.auxiliar)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/admin/auxiliares']);
      },
      err => {
        document.getElementById('lblName').innerHTML = "Algo ha pasado. Revisa los datos!!";
        console.error(err)
      }
    )
  }

  updatear(){
    console.log(this.auxiliar);
    this.auxiliaresService.updateAuxiliar(this.auxiliar.id_auxiliar.toString(), this.auxiliar)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/admin/auxiliares']);
      },
      err => {
        document.getElementById('lblName').innerHTML = "Algo ha pasado. Revisa los datos!!";
        console.error(err)
      }
    )
  }

 
  

}
