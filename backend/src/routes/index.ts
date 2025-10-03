import type { FastifyInstance } from "fastify";
import { registerUser } from "./userRegister";
import { registerTicket } from "./ticketRegister";

//route register

export default async function registerRoutes(server: FastifyInstance) {
  //USER
  server.register(registerUser, { prefix: "/register" });
  //TICKET
  server.register(registerTicket, { prefix: "/ticket" });
}
