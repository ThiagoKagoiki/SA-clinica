import express from 'express';
import dotenv from 'dotenv';
import db from './models/index.js'; // Certifique-se de que há um `index.js` dentro de `models/`
import { autenticar, somenteAdmin } from './middleware/auth.js';
import { registrar, login, addConsulta, deletarConsulta, editarConsulta, verConsulta } from './controllers/authController.js'
import cors from 'cors';

dotenv.config(); // Carrega variáveis do .env

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true // ou '*', mas apenas em ambiente de dev
})); // Permite leitura de JSON

//Usuarios

app.use(express.json())

app.post('/registrar', registrar);

app.post('/login', login);

// Rota protegida: acessível para qualquer usuário autenticado
app.get('/painel', autenticar, (req, res) => {
  res.send(`Olá, ${req.usuario.nome}. Seu cargo é: ${req.usuario.cargo}`);
});

// Rota protegida: acessível apenas a admins
app.get('/admin', autenticar, somenteAdmin, (req, res) => {
  res.send("Bem-vindo à área administrativa da clínica.");
});


//Consultas

app.post('/addConsulta', addConsulta);

app.delete('/removerConsulta/:id', deletarConsulta);

app.put('/editarConsulta', editarConsulta);

app.get('/consultas', verConsulta)

// Sincroniza os modelos com o banco e inicia o servidor
db.sequelize.sync().then(() => {
  app.listen(3000, () => console.log("Servidor da clínica rodando na porta 3000"));
});
