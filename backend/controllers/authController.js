import db from '../models/index.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config'; // Garante que as variáveis de ambiente sejam carregadas


//Usuario
export const registrar = async (req, res) => {
  try {
    const { nome, email, senha, cargo } = req.body;

    const novoUsuario = await db.User.create({ nome, email, senha, cargo });

    res.status(201).json({
      mensagem: 'Usuário criado com sucesso',
      usuario: novoUsuario
    });
  } catch (err) {
    res.status(400).json({
      erro: 'Erro ao criar usuário',
      detalhes: err.message
    });
  }
};

export const login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await db.User.findOne({ where: { email } });

    if (!usuario || !(await bcrypt.compare(senha, usuario.senha))) {
      return res.status(401).json({ erro: 'Credenciais inválidas' });
    }

    const token = jwt.sign({
      id: usuario.id,
      nome: usuario.nome,
      cargo: usuario.cargo
    }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Adicione uma expiração para o token

    res.json({
      mensagem: 'Login bem-sucedido',
      token
    });
  } catch (err) {
    console.error('Erro no login:', err); // Logar o erro para depuração
    res.status(500).json({
      erro: 'Erro interno do servidor',
      detalhes: err.message
    });
  }
};

//Consultas

export const addConsulta = async(req, res) => {
  try {
    const { horario, medico, emailUser } = req.body;

    const novaConsulta = await db.Consulta.create({ horario, medico, emailUser });

    res.status(201).json({
      mensagem: 'Consulta criada com sucesso',
      consulta: novaConsulta
    });
  } catch (err) {
    res.status(400).json({
      erro: 'Erro ao criar Consulta',
      detalhes: err.message
    });
  }
}