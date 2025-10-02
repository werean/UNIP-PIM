import { z } from "zod";

export default class Validation {
  username = z.string().min(2, "Nome deve conter no mínimo 2 caracteres.");
  email = z.email("Email deve ter formato válido");
  password = z
    .string()
    .min(8, "A senha deve conter pelo menos 8 caracteres.")
    .refine((password) => /[A-Z]/.test(password), {
      message: "A senha deve conter pelo menos uma letra maiúscula.",
    })
    .refine((password) => /[a-z]/.test(password), {
      message: "A senha deve conter pelo menos uma letra minuscula.",
    })
    .refine((password) => /[0-9]/.test(password), {
      message: "A senha deve conter pelo menos um número.",
    })
    .refine((password) => /[^A-Za-z0-9]/.test(password), {
      message: "A senha deve conter pelo menos um caracter especial.",
    });
  roleValues = z.union([z.literal(5), z.literal(10), z.literal(15)]);
}
