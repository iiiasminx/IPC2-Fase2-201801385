import { Component, OnInit } from '@angular/core';
import {TicketsService} from '../../services/tickets.service'

@Component({
  selector: 'app-stud-lista-tickets',
  templateUrl: './stud-lista-tickets.page.html',
  styleUrls: ['./stud-lista-tickets.page.scss'],
})
export class StudListaTicketsPage implements OnInit {

  tickets: any = [];
  lodemas: any = [];
  constructor(private ticketService: TicketsService) { }
  
  ngOnInit() {
    this.obteniendoJuegos();
  }

  obteniendoJuegos(){
    this.ticketService.getTickets().subscribe(
      res => {
        console.log(res);
        this.tickets = res;
      },
      err => console.error(err)
    )

    this.ticketService.getLoDemás().subscribe(
      res => {
        this.lodemas = res;
        console.log(this.lodemas);
      },
      err => console.error(err)
    )
  }

}
