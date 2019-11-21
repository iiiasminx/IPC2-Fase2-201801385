import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Auxiliar} from '../models/auxiliar'

@Injectable({
  providedIn: 'root'
})
export class AuxiliaresService {

  API_AUX = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getAuxiliares(){
    return this.http.get(`${this.API_AUX}/auxiliares`);
  }

  getAuxiliarr(id: string){
    return this.http.get(`${this.API_AUX}/auxiliares/${id}`);
  }

  guardarAuxiliar(auxiliar: Auxiliar){
    return this.http.post(`${this.API_AUX}/auxiliares`, auxiliar);
  }

  eliminarAuxiliar(id: string){
    return this.http.delete(`${this.API_AUX}/auxiliares/${id}`);
  }

  updateAuxiliar(id: string, auxiliar: Auxiliar){
    return this.http.put(`${this.API_AUX}/auxiliares/${id}`, auxiliar);
  }
}
