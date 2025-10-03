import type { FastifyInstance } from "fastify";
import { createTicketSchema } from "../dto/create-ticket.dto";
import { ticketService } from "../services/ticket.service";
import { Ticket } from "../../../models";

export async function ticketController(server: FastifyInstance, opts: any) {
  server.get("/", async (req, res) => {
    const tickets = await ticketService.findAll();
    if (tickets.length === 0) {
      return res.status(200).send({
        message: "Ainda não possui tickets cadastrados.",
      });
    }

    return res.status(200).send({ tickets });
  });

  server.post("/", async (req, res) => {
    const { title, ticket_body, urgency } = createTicketSchema.parse(req.body);

    const newTicket: Omit<Ticket, "id"> = {
      ticket_body,
      title,
      urgency,
    };
    await ticketService.insert(newTicket);
    return res.status(201).send({ message: "Ticket criado com sucesso!", ticket: newTicket });
  });

  server.delete("/:id", async (req, res) => {
    const { id } = req.params as { id: string };
    const selectTicketById = await ticketService.findById(id);
    const ticket = selectTicketById;
    if (!selectTicketById) {
      return res.status(404).send({ message: "Ticket não encontrado." });
    }
    await ticketService.delete(id);
    return res.status(200).send({
      message: "Ticket deletado.",
      ticket,
    });
  });
}
