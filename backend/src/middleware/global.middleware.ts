import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { authConfig } from "../modules/auth/auth.config";
import jwt from "jsonwebtoken";

export function verifyToken(server: FastifyInstance) {
  server.addHook("onRequest", async (request: FastifyRequest, reply: FastifyReply) => {
    const token = request.cookies[authConfig.cookie.name];
    const publicRoute = ["/login", "/register"];
    const urlPath = request.raw.url?.split("?")[0];
    if (publicRoute.includes(urlPath || "")) {
      return;
    }
    if (!token) {
      reply.code(302).redirect("/");
      return;
    }
    if (token) {
      try {
        jwt.verify(token, authConfig.jwt.secret);
      } catch {
        return reply.code(302).redirect("/");
      }
    }
  });
}
