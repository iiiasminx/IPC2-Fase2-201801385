import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Curso} from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  API_AUX = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getCursos(){
    return this.http.get(`${this.API_AUX}/cursos`);
  }
  getCurso(id: string){
    return this.http.get(`${this.API_AUX}/cursos/${id}`);
  }
  guardarCurso(curso: Curso){
    return this.http.post(`${this.API_AUX}/cursos`, curso);
  }
  eliminarCurso(id: string){
    return this.http.delete(`${this.API_AUX}/cursos/${id}`);
  }
  updateCurso(id: string, curso:Curso){
    return this.http.put(`${this.API_AUX}/cursos/${id}`, curso);
  }
  getCursosSinAuxiliar(){
    return this.http.get(`${this.API_AUX}/cursos/spec/1`)
  }
}
