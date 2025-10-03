import { z } from "zod";

export class TicketValidation {
  title = z.string().min(4, "Campo deve conter no mínimo 4 caracteres.");
  ticket_body = z
    .string()
    .min(10, "O corpo do ticket deve ter pelo menos 10 caracteres.")
    .max(5000, "O corpo do ticket não pode ultrapassar 5000 caracteres.");
  urgency = z.union([z.literal(1), z.literal(2), z.literal(3)]);
}

const v = new TicketValidation();

export const createTicketSchema = z.object({
  title: v.title,
  ticket_body: v.ticket_body,
  urgency: v.urgency,
});
