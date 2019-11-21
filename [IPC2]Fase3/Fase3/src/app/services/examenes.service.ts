import { Injectable } from '@angular/core';


import {HttpClient} from '@angular/common/http';
import { Examen } from '../models/examen';

@Injectable({
  providedIn: 'root'
})
export class ExamenesService {

  API_AUX = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getExamenes(){
    return this.http.get(`${this.API_AUX}/examenes`);
  }
  getExamen(id: string){
    return this.http.get(`${this.API_AUX}/examenes/${id}`);
  }
  getExamenPorNombre(id: string){
    return this.http.get(`${this.API_AUX}/examenes/spec/${id}`);
  }
  guardarrExamen(curso: Examen){
    return this.http.post(`${this.API_AUX}/examenes`, curso);
  }
  eliminarExamen(id: string){
    return this.http.delete(`${this.API_AUX}/examenes/${id}`);
  }
  updateExamen(id: string, curso:Examen){
    return this.http.put(`${this.API_AUX}/examenes/${id}`, curso);
  }
}
