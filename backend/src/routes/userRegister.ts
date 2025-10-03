import type { FastifyInstance } from "fastify";
import z, { check } from "zod";
import { UserValidation } from "./validations/FieldValidation";
import { knex } from "../database";
//router http method
const v = new UserValidation();

export async function registerUser(server: FastifyInstance) {
  server.post("/", async (req, res) => {
    const createUserSchema = z.object({
      username: v.username,
      email: v.email,
      password: v.password,
      role: v.roleValues.optional(),
    });
    const { username, email, password, role } = createUserSchema.parse(req.body);

    const newUser = {
      id: crypto.randomUUID(),
      email,
      username,
      password,
      role,
    };
    await knex("users").insert(newUser);
    return res.status(201).send({ message: "Usuário criado com sucesso!", user: newUser });
  });

  server.delete("/:id", async (req, res) => {
    const { id } = req.params as { id: string };
    const selectUserById = await knex("users").where({ id }).first();
    const user = selectUserById;
    if (!selectUserById) {
      return res.status(404).send({ message: "Usuário não encontrado." });
    }
    await knex("users").where({ id }).del();
    return res.status(200).send({
      message: "Usuario deletado.",
      user,
    });
  });

  server.get("/", async (req, res) => {
    const users = await knex("users").select();
    if (users.length === 0) {
      return res.status(200).send({
        message: "Ainda não possui usuários cadastrados.",
      });
    }

    return res.status(200).send({ users });
  });
}
