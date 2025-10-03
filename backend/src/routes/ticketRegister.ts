import type { FastifyInstance } from "fastify";
import z from "zod";
import { TicketValidation } from "./validations/FieldValidation";
import { knex } from "../database";
const v = new TicketValidation();

export async function registerTicket(server: FastifyInstance) {
  server.get("/", async (req, res) => {
    const tickets = await knex("tickets").select();
    if (tickets.length === 0) {
      return res.status(200).send({
        message: "Ainda não possui tickets cadastrados.",
      });
    }

    return res.status(200).send({ tickets });
  });

  server.post("/", async (req, res) => {
    const createTicketSchema = z.object({
      title: v.title,
      ticket_body: v.ticket_body,
      urgency: v.urgency,
    });
    const { title, ticket_body, urgency } = createTicketSchema.parse(req.body);

    const newTicket = {
      ticket_body,
      title,
      urgency,
    };
    await knex("tickets").insert(newTicket);
    return res.status(201).send({ message: "Ticket criado com sucesso!", ticket: newTicket });
  });

  server.delete("/:id", async (req, res) => {
    const { id } = req.params as { id: string };
    const selectTicketById = await knex("tickets").where({ id }).first();
    const ticket = selectTicketById;
    if (!selectTicketById) {
      return res.status(404).send({ message: "Ticket não encontrado." });
    }
    await knex("tickets").where({ id }).del();
    return res.status(200).send({
      message: "Ticket deletado.",
      ticket,
    });
  });
}
