import express from 'express';
import produtosRouter from './produtos.js';
import voosRouter from './voos.js';

const router = express.Router();

router.use('/produtos', produtosRouter);
router.use('/voos', voosRouter);

router.get('/ping',(req, res) => {
  res.json({pong: true});
});

router.get("/", (req, res) => {
  res.json(`Ola mundo !!! Eu sou Emmanuel e tenho 49 anos`);
});
//const server = createServer((req, res) => {
//  let nome = "Emmanuel";
//  let idade = 90;
//  res.end(`Ola mundo !!! Eu sou ${nome} e tenho ${idade} anos`);
//});



export default router;