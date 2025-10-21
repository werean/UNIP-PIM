import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import fastifyCookie from "@fastify/cookie";
import { LoginDTO, loginSchema } from "./dto/auth.dto";
import jwt from "jsonwebtoken";
import { userService } from "../users/user.service";
import { success } from "zod";

export async function login(server: FastifyInstance) {
  server.post("/login", async (req: FastifyRequest<{ Body: LoginDTO }>, res: FastifyReply) => {
    const { email, password } = loginSchema.parse(req.body);
    const user = await userService.findByEmail(email);
    if (!user) {
      res.code(404).send({
        success: false,
        message: "Usuário não encontrado.",
      });
    }
    if (user.password !== password) {
      res.code(401).send({
        success: false,
        message: "Usuário não encontrado.",
      });
    }
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error("JWT_SECRET não configurado");
    }
    const token = jwt.sign({ sub: user.id }, secret, { expiresIn: "1h" });
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
