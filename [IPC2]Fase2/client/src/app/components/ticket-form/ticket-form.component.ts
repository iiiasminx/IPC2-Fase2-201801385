import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {TicketsService} from '../../services/tickets.service'
import { Ticket } from 'src/app/models/ticket';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit {

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private ticketService: TicketsService) { }

    ticket: Ticket = {
      tick_asunto: '',
      tick_contenido: '',
      tick_estado: 'enviado',
      id_seccion: 0
    }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if(params.id){
      this.ticket.id_seccion = +params.id;      
    }
  }

  probando(){
    console.log(this.ticket);
    this.ticketService.guardarTicket(this.ticket)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/estudiante/tickets']);
      },
      err => {
        document.getElementById('lblName').innerHTML = "Algo ha pasado. Revisa los datos!!";
        console.error(err)
      }
    )
  }

}
