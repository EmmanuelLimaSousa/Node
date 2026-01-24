//import { createServer } from "node:http";
import express from "express";
import helmet from "helmet";
import path from "path";
import { fileURLToPath } from 'url';
import router from "./routes/index.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = express();

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, '../public')));

server.use('/', router);

server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});