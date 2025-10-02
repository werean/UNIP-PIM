import type { FastifyInstance } from "fastify";

export async function LoginRoute(server: FastifyInstance) {
  server.get("/", async (req, res) => {
    res.send({ message: "hello world" });
  });
}
