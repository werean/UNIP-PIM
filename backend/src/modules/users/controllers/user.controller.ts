import type { FastifyInstance } from "fastify";
import { createUserSchema } from "../dto/create-user.dto";
import { userService } from "../services/user.service";
import { User } from "../../../models";

export async function userController(server: FastifyInstance, opts: any) {
  server.post("/create", async (req, res) => {
    const { username, email, password, role } = createUserSchema.parse(req.body);

    const newUser: User = {
      id: crypto.randomUUID(),
      email,
      username,
      password,
      role: role ?? 5,
    };
    await userService.insert(newUser);
    return res.status(201).send({ message: "Usuário criado com sucesso!", user: newUser });
  });

  server.delete("/delete/:id", async (req, res) => {
    const { id } = req.params as { id: string };
    const user = await userService.findById(id);
    if (!user) {
      return res.status(404).send({ message: "Usuário não encontrado." });
    }
    await userService.delete(id);
    return res.status(200).send({
      message: "Usuario deletado.",
      user,
    });
  });

  server.get("/find/:id", async (req, res) => {
    const { id } = req.params as { id: string };
    const user = await userService.findById(id);
    if (!user) {
      return res.status(404).send({
        message: "Usuário não encontrado.",
      });
    }
    return { user };
  });

  server.get("/list", async (req, res) => {
    const users = await userService.findAll();
    if (users.length === 0) {
      return res.status(200).send({
        message: "Ainda não possui usuários cadastrados.",
      });
    }

    return res.status(200).send({ users });
  });
}
