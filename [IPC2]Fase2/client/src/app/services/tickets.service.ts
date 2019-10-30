import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Ticket} from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  API_AUX = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getSecciones(){
    return this.http.get(`${this.API_AUX}/tickets`)
  }
  getSeccion(id: string){
    return this.http.get(`${this.API_AUX}/tickets/${id}`);
  }
  guardarSeccion(ticket: Ticket){
    return this.http.post(`${this.API_AUX}/tickets`, ticket);
  }
  eliminarSeccion(id: string){
    return this.http.delete(`${this.API_AUX}/tickets/${id}`);
  }
  getLoDemás(){
    return this.http.get(`${this.API_AUX}/tickets/spec/1`);
  }
}
