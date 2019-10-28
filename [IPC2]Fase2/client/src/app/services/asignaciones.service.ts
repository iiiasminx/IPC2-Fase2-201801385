import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Auxiliar} from '../models/auxiliar'
import { Asignacion } from '../models/asignacion';

@Injectable({
  providedIn: 'root'
})
export class AsignacionesService {

  API_AUX = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getAsigns(){
    return this.http.get(`${this.API_AUX}/asignaciones`);
  }

  getAsign(id: string){
    return this.http.get(`${this.API_AUX}/asignaciones/${id}`);
  }

  guardarAsign(asignacion: Asignacion){
    return this.http.post(`${this.API_AUX}/asignaciones`, asignacion);
  }

  eliminarAsign(id: string){
    return this.http.delete(`${this.API_AUX}/asignaciones/${id}`);
  }

  updateAsign(id: string, asignacion: Asignacion){
    return this.http.put(`${this.API_AUX}/asignaciones/${id}`, asignacion);
  }
  getAsignporAuxiliar(id: string){
    return this.http.get(`${this.API_AUX}/asignaciones/spec/${id}`);
  }
}
