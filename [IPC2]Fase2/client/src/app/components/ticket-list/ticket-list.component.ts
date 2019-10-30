import { Component, OnInit } from '@angular/core';
import {TicketsService} from '../../services/tickets.service'

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  tickets: any = [];
  lodemas: any = [];
  constructor(private ticketService: TicketsService) { }

  ngOnInit() {
    this.obteniendoJuegos();
  }

  obteniendoJuegos(){
    this.ticketService.getSecciones().subscribe(
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
