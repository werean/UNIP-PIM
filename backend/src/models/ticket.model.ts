type Urgency = 1 | 2 | 3;

export class Ticket {
  public readonly id?: number;
  public title: string;
  public ticket_body: string;
  public urgency: Urgency;

  constructor(title: string, ticket_body: string, urgency: Urgency) {
    this.title = title;
    this.ticket_body = ticket_body;
    this.urgency = urgency;
  }
}

export const TicketTableName = "tickets" as const;
