import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Seccion} from '../models/seccion';
@Injectable({
  providedIn: 'root'
})
export class SeccionesService {

  API_AUX = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getSecciones(){
    return this.http.get(`${this.API_AUX}/secciones`)
  }
  getSeccion(id: string){
    return this.http.get(`${this.API_AUX}/secciones/${id}`);
  }
  guardarSeccion(seccion: Seccion){
    return this.http.post(`${this.API_AUX}/secciones`, seccion);
  }
  eliminarSeccion(id: string){
    return this.http.delete(`${this.API_AUX}/secciones/${id}`);
  }
  updateSeccion(id: string, seccion: Seccion){
    return this.http.put(`${this.API_AUX}/secciones/${id}`, seccion);
  }
  getSeccionsinAuxiliar(){
    return this.http.get(`${this.API_AUX}/secciones/spec/1`);    
  }
  setearAuxiliar(id: string, carnet:string){
    return this.http.get(`${this.API_AUX}/secciones/spec1/${id}/${carnet}`);
  }
  getCursosdeMiAuxiliar(id: string){
    return this.http.get(`${this.API_AUX}/secciones/spec2/${id}`);
  }
  desasignarAuxdeClase(id:string){
    return this.http.get(`${this.API_AUX}/secciones/spec3/${id}`);
  }
}
