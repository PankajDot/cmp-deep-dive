import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { ITicket } from './ticket.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets: ITicket[] = [];

  onAdd(ticketData: {title: string, text: string}) {
    const newTicket: ITicket = {
      id: Math.random().toString(36).substr(2, 9),
      title: ticketData.title,
      request: ticketData.text,
      status: 'open'
    }
    this.tickets.push(newTicket);
  }

  onCloseTicket(id: string) {
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === id) {
        return {...ticket, status: 'closed' };
      }
      return ticket;
    })
  }
}
