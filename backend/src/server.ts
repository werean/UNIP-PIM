import fastify from "fastify";
import { fastifyCookie } from "@fastify/cookie";
import dotenv from "dotenv";
import registerRoutes from "./routes/index";
import { env } from "./env";
import { verifyToken } from "./middleware/global.middleware";
import { authConfig } from "./modules/auth/auth.config";

dotenv.config();

const server = fastify();
const port = env.PORT;

server.register(fastifyCookie, {
  secret: authConfig.jwt.secret,
  hook: "onRequest",
});
server.addHook("onRequest", verifyToken);
server.register(registerRoutes);

server.listen(
  {
    port: Number(port),
  },
  () => {
    console.log(`http://localhost:${port}`);
  }
);
