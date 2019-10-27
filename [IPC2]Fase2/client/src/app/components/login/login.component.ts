import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuxiliaresService } from '../../services/auxiliares.service';
import {EstudianteService} from '../../services/estudiante.service';
import { Estudiante } from 'src/app/models/estudiante';
import { Auxiliar } from 'src/app/models/auxiliar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

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
  constructor(private router: Router,private auxiliaresService: AuxiliaresService,
    private estudiantesService: EstudianteService){

  }

  selectedLevel;
  data:Array<Object> = [
      {id: 0, name: "Estudiante"},
      {id: 1, name: "Auxiliar"},
      {id: 2, name: "Administrador"}
  ];

  carnet;
  passsword;

  
  ingresando(){

    console.log(this.carnet);
    console.log(this.passsword);

    // ESTUDIANTE
    if(this.selectedLevel.name == "Estudiante"){
        console.log("Estudiante Seleccionado")

        this.estudiantesService.getEstudiante(this.carnet).subscribe(
          res => {           
            this.estudiante = res[0];
            console.log(res[0]);
            if(this.estudiante){
              console.log(this.estudiante.contrasena + " comparando con " + this.passsword);
              if(this.estudiante.contrasena == this.passsword){
                this.router.navigate(['/estudiante']);               
              sessionStorage.setItem('usuario',this.carnet);
              console.log('usuario: ', sessionStorage.getItem('usuario'));
              } else {
                alert("Usuario o contraseña incorrectos :C")
              }              
            } else {
              alert("Usuario o contraseña incorrectos :C")
            }        
          },
          err => {
            console.error(err);
          }
        )

    } 
    // AUXILIAR
    else if(this.selectedLevel.name == "Auxiliar"){
      console.log("Auxiliar Seleccionado")
      this.auxiliaresService.getAuxiliar(this.carnet).subscribe(
        res => {           
          this.auxiliar = res[0];
          console.log(res[0]);
          if(this.auxiliar){
            console.log(this.auxiliar.contraseña + " comparando con " + this.passsword);
            if(this.auxiliar.contraseña == this.passsword){
              this.router.navigate(['/auxiliar']);
              sessionStorage.setItem('usuario',this.carnet);
            } else {
              alert("Usuario o contraseña incorrectos :C")
            }              
          } else {
            alert("Usuario o contraseña incorrectos :C")
          }        
        },
        err => {
          console.error(err);
        }
      )
        // ADMIN
    } else if (this.selectedLevel.name == "Administrador"){
      console.log("Administrador Seleccionado")
      
      if(this.carnet == '201800000' && this.passsword == 'teemo'){
        this.router.navigate(['/admin']);        
        sessionStorage.setItem('usuario',this.carnet);
      } else {
        alert("Usuario o contraseña incorrectos :C")
      }

    } else{
      alert("Por favor seleccione una opción");
    }

  }
}
