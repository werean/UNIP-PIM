import type { FastifyInstance } from "fastify";
import userRoutes from "../modules/users/user.routes";
import ticketRoutes from "../modules/tickets/ticket.routes";
import authLoginRoutes from "../modules/auth/auth.routes";

export default async function registerRoutes(server: FastifyInstance) {
  server.register(userRoutes);
  server.register(ticketRoutes);
  server.register(authLoginRoutes);
}
