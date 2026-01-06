import { createServer } from "node:http";

const server = createServer((req, res) => {
  let nome = "Emmanuel";
  let idade = 90;
  res.end(`Olá mundo !!! Eu sou ${nome} e tenho ${idade} anos`);
});

server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});