import db from '../models/index.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config'; // Garante que as variáveis de ambiente sejam carregadas

// Rota de registro de novo usuário
export const registrar = async (req, res) => {
  try {
    const { nome, email, senha, cargo } = req.body;

    // Cria e salva o usuário no banco
    const novoUsuario = await db.User.create({ nome, email, senha, cargo });

    res.status(201).json({
      mensagem: 'Usuário criado com sucesso',
      usuario: novoUsuario
    });
  } catch (err) {
    // Em caso de erro (ex: email duplicado), retorna erro 400
    res.status(400).json({
      erro: 'Erro ao criar usuário',
      detalhes: err.message
    });
  }
};

// Rota de login
export const login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    // Busca usuário pelo e-mail
    const usuario = await db.User.findOne({ where: { email } });

    // Verifica se encontrou e compara senha
    if (!usuario || !(await bcrypt.compare(senha, usuario.senha))) {
      return res.status(401).json({ erro: 'Credenciais inválidas' });
    }

    // Cria token JWT com ID, nome e cargo
    // Certifique-se de que process.env.JWT_SECRET está disponível (dotenv/config ajuda com isso)
    const token = jwt.sign({
      id: usuario.id,
      nome: usuario.nome,
      cargo: usuario.cargo
    }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Adicione uma expiração para o token

    // Retorna mensagem de sucesso e o token
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