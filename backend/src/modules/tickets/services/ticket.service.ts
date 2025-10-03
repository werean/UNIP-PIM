import { knex } from "../../../../config/database.config";
import { Ticket, TicketTableName } from "../../../models";

// Service apenas encapsula as queries do knex, sem lógica adicional
export const ticketService = {
  findAll: (): Promise<Ticket[]> => knex(TicketTableName).select(),

  findById: (id: string): Promise<Ticket | undefined> =>
    knex(TicketTableName).where({ id }).first(),

  insert: (ticket: Omit<Ticket, "id">): Promise<void> => knex(TicketTableName).insert(ticket),

  delete: (id: string): Promise<number> => knex(TicketTableName).where({ id }).del(),
};
