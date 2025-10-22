import fastify from "fastify";
import cookie, { fastifyCookie } from "@fastify/cookie";
import dotenv from "dotenv";
import registerRoutes from "./routes/index";
import { env } from "./env";
import { verifyToken } from "./middleware/global.middleware";
import { authConfig } from "./modules/auth/auth.config";

dotenv.config();

const server = fastify();
const port = env.PORT;
server.register(cookie, {
  secret: process.env.COOKIE_SECRET,
  hook: "onRequest",
});
server.register(fastifyCookie, {
  secret: authConfig.jwt.secret,
});
server.register(verifyToken);
server.register(registerRoutes);

server.listen(
  {
    port: Number(port),
  },
  () => {
    console.log(`http://localhost:${port}`);
  }
);
