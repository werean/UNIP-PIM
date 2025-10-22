import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import fastifyCookie from "@fastify/cookie";
import { LoginDTO, loginSchema } from "./dto/auth.dto";
import jwt from "jsonwebtoken";
import { userService } from "../users/user.service";
import { success } from "zod";
import { authConfig } from "./auth.config";

export async function login(server: FastifyInstance) {
  server.post("/login", async (req: FastifyRequest<{ Body: LoginDTO }>, res: FastifyReply) => {
    const { email, password } = loginSchema.parse(req.body);
    const user = await userService.findByEmail(email);
    if (!user || user.password !== password) {
      res.code(404).send({
        success: false,
        message: "Usuário não encontrado.",
      });
    }
    const token = jwt.sign({ sub: user.id }, authConfig.jwt.secret, {
      expiresIn: authConfig.jwt.expiresIn,
    });
    res.setCookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge: 3600 * 24 * 7, //1 week
    });
    return res.code(201).send({
      success: true,
      message: "Login realizado com sucesso!",
    });
  });
}
