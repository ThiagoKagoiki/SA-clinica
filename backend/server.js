import express from 'express';
import dotenv from 'dotenv';
import db from './models/index.js';
import { autenticar, somenteAdmin } from './middleware/auth.js';
import { registrar, login, addConsulta, deletarConsulta, editarConsulta, verConsulta, verMinhasConsultas } from './controllers/authController.js'
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

//Usuarios

app.use(express.json())

app.post('/registrar', registrar);

app.post('/login', login);

app.get('/painel', autenticar, (req, res) => {
  res.send(`Olá, ${req.usuario.nome}. Seu cargo é: ${req.usuario.cargo}`);
});

app.get('/admin', autenticar, somenteAdmin, (req, res) => {
  res.send("Bem-vindo à área administrativa da clínica.");
});


//Consultas

app.post('/addConsulta', addConsulta);

app.delete('/removerConsulta/:id', deletarConsulta);

app.put('/editarConsulta', editarConsulta);

app.get('/consultas', verConsulta)

app.get('/minhasConsultas', autenticar, verMinhasConsultas)

// Sincroniza os modelos com o banco e inicia o servidor
db.sequelize.sync().then(() => {
  app.listen(3000, () => console.log("Servidor da clínica rodando na porta 3000"));
});
