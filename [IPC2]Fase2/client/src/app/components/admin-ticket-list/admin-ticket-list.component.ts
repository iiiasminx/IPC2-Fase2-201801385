import { Component, OnInit } from '@angular/core';

import { TicketsService } from '../../services/tickets.service';

@Component({
  selector: 'app-admin-ticket-list',
  templateUrl: './admin-ticket-list.component.html',
  styleUrls: ['./admin-ticket-list.component.css']
})
export class AdminTicketListComponent implements OnInit {

  tickets: any = [];
  lodemas: any = [];

  constructor(private ticketsservice: TicketsService) { }

  filterPost2 = '';

  ngOnInit() {
    this.obteniendoJuegos();
  }

  obteniendoJuegos(){
    this.ticketsservice.getTickets().subscribe(
      res => {
        console.log(res);
        this.tickets = res;
      },
      err => console.error(err)
    )

    this.ticketsservice.getLoDemás().subscribe(
      res => {
        this.lodemas = res;
        console.log(this.lodemas);
      },
      err => console.error(err)
    )
  }

}
