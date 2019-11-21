import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

import { AuxiliaresService } from '../../services/auxiliares.service';
import {EstudiantesService} from '../../services/estudiantes.service';
import { Estudiante } from 'src/app/models/estudiante';
import { Auxiliar } from 'src/app/models/auxiliar';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

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
  password;

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

  onChange(selectedValue){
    console.info("Selected:",selectedValue);
  }

  Ingresando(SelectedValue){
    console.log(this.nombre + " " + this.password);

    console.info(this.selectedLevel.first);
  }

}
