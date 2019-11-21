import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Auxiliar} from '../models/auxiliar'
import { AsignacionAux } from '../models/asignacionaux';

@Injectable({
  providedIn: 'root'
})
export class AsigncionesAuxService {

  API_AUX = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getAsigns(){
    return this.http.get(`${this.API_AUX}/asignacionesaux`);
  }
  getTodo(){
    return this.http.get(`${this.API_AUX}/asignacionesaux/fase3/`);
  }

  getAsign(id: string){
    return this.http.get(`${this.API_AUX}/asignacionesaux/${id}`);
  }

  guardarAsign(asignacion: AsignacionAux){
    return this.http.post(`${this.API_AUX}/asignacionesaux`, asignacion);
  }

  eliminarAsign(id: string){
    return this.http.delete(`${this.API_AUX}/asignacionesaux/${id}`);
  }

  updateAsign(id: string, asignacion: AsignacionAux){
    return this.http.put(`${this.API_AUX}/asignacionesaux/${id}`, asignacion);
  }
  getAsignporEstudiante(id: string){
    return this.http.get(`${this.API_AUX}/asignacionesaux/spec/${id}`);
  }
}
