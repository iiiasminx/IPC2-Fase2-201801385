import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

import { AuxiliaresService } from '../../services/auxiliares.service';
import { EstudiantesService } from '../../services/estudiantes.service';
import { Estudiante } from 'src/app/models/estudiante';
import { Auxiliar } from 'src/app/models/auxiliar';

@Component({
  selector: 'app-no-password',
  templateUrl: './no-password.page.html',
  styleUrls: ['./no-password.page.scss'],
})
export class NoPasswordPage implements OnInit {

  estudiante: Estudiante = {
    id_estudiante: 0,
    stud_nombre: "",
    stud_apellido: "",
    stud_email: "",
    contrasena: ""
  };
  auxiliar: Auxiliar = {
    id_auxiliar: 0,
    aux_nombre: "",
    aux_apellido: "",
    aux_email: "",
    contraseña: ""
  };
  nombre;
  correo;

  selectedLevel;

  users: any[] = [
    {
      id: 0,
      first: 'Estudiante'
    },
    {
      id: 1,
      first: 'Auxiliar'
    }
  ];

  constructor(public navCtrl: NavController, public toastController: ToastController,
    private router: Router, private auxiliaresService: AuxiliaresService,
    private estudiantesService: EstudiantesService) { }

  ngOnInit() {
  }

  Ingresando(SelectedValue) {
    console.log(this.nombre);

    console.info(this.selectedLevel.first);
    // ESTUDIANTE
    if (this.selectedLevel.first == "Estudiante") {

      console.log("Estudiante Seleccionado")

      this.estudiantesService.getEstudiante(this.nombre).subscribe(
        res => {
          this.estudiante = res[0];
          console.log(res[0]);
          if (this.estudiante) {
            
          } else {
            alert("No existe este usuario :C")
          }          
        },
        err => {
          console.error(err);
        }
      )

    }
    // AUXILIAR
    else if (this.selectedLevel.first == "Auxiliar"){
      console.log("Auxiliar Seleccionado")
      this.auxiliaresService.getAuxiliarr(this.nombre).subscribe(
        res => {
          this.auxiliar = res[0];
          console.log(res[0]);
          if (this.auxiliar) {
            
          } else {
            alert("No existe este usuario :C")
          }
        },
        err => {
          console.error(err);
        }
      )
    }
  }

}
