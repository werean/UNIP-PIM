import type { FastifyInstance } from "fastify";
import { userController } from "../modules/users/user.controller";
import { ticketController } from "../modules/tickets/ticket.controller";

//route register

export default async function registerRoutes(server: FastifyInstance) {
  //USER
  server.register(userController, { prefix: "/user" });
  //TICKET
  server.register(ticketController, { prefix: "/ticket" });
}
