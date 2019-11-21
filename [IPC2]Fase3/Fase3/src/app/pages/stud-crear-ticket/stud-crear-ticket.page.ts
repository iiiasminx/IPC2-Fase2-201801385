import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {TicketsService} from '../../services/tickets.service'
import { Ticket } from 'src/app/models/ticket';

@Component({
  selector: 'app-stud-crear-ticket',
  templateUrl: './stud-crear-ticket.page.html',
  styleUrls: ['./stud-crear-ticket.page.scss'],
})
export class StudCrearTicketPage implements OnInit {

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
    this.ticket.id_seccion = +sessionStorage.getItem("idseccion_ticket");
  }

  probando(){
    console.log(this.ticket);
    this.ticketService.guardarTicket(this.ticket)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/stud-main']);
      },
      err => {
        document.getElementById('lblName').innerHTML = "Algo ha pasado. Revisa los datos!!";
        console.error(err)
      }
    )
  }

}
