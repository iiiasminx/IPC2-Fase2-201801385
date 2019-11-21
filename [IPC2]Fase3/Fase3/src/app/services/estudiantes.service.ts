import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Estudiante} from '../models/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  API_AUX = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getEstudiantes(){
    return this.http.get(`${this.API_AUX}/estudiantes`);
  }

  getEstudiante(id: string){
    return this.http.get(`${this.API_AUX}/estudiantes/${id}`);
  }

  guardarEstudiante(estudiante: Estudiante){
    return this.http.post(`${this.API_AUX}/estudiantes`, estudiante);
  }

  eliminarEstudiante(id: string){
    return this.http.delete(`${this.API_AUX}/estudiantes/${id}`);
  }

  updateEstudiante(id: string, estudiante: Estudiante){
    return this.http.put(`${this.API_AUX}/estudiantes/${id}`, estudiante);
  }
}
