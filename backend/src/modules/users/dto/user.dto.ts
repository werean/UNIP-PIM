import { z } from "zod";
import { UserValidation } from "../validations/user.validation";

const v = new UserValidation();

export const userSchema = z.object({
  username: v.username,
  email: v.email,
  password: v.password,
  role: v.roleValues.optional().default(5),
});
