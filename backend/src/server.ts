import fastify from "fastify";
import dotenv from "dotenv";
import registerRoutes from "../routes/index";

dotenv.config();

const server = fastify();
const port = process.env.PORT;

server.register(registerRoutes);

server.listen(
  {
    port: Number(port),
  },
  () => {
    console.log(`http://localhost:${port}`);
  }
);
