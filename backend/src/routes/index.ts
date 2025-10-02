import type { FastifyInstance } from "fastify";

import { LoginRoute } from "./login";

//route register

export default async function registerRoutes(server: FastifyInstance) {
  server.register(LoginRoute, { prefix: "/login" });
}
