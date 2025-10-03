export interface Ticket {
  id: number;
  title: string;
  ticket_body: string;
  urgency: number;
}

export const TicketTableName = "tickets" as const;