import fastify from "fastify";
import cookie from "@fastify/cookie";
import dotenv from "dotenv";
import registerRoutes from "./routes/index";
import { env } from "./env";

dotenv.config();

const server = fastify();
const port = env.PORT;
server.register(cookie, {
  secret: process.env.COOKIE_SECRET,
  hook: "onRequest",
});
server.register(registerRoutes);

server.listen(
  {
    port: Number(port),
  },
  () => {
    console.log(`http://localhost:${port}`);
  }
);
