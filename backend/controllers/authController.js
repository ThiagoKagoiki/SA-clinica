import db from '../models/index.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config'; // Garante que as variáveis de ambiente sejam carregadas
import { where } from 'sequelize';


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
  const { email, senha, cargo } = req.body;

  try {
    const usuario = await db.User.findOne({ where: { email } });

    if (!usuario || !(await bcrypt.compare(senha, usuario.senha))) {
      return res.status(401).json({ erro: 'Credenciais inválidas' });
    }

    if(usuario.cargo !== cargo){
      return res.status(401).json({error: "Cargo inválido para este usuário"})
    }

    const token = jwt.sign({
      id: usuario.id,
      nome: usuario.nome,
      cargo: usuario.cargo
    }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Adicione uma expiração para o token

    res.json({
      mensagem: 'Login bem-sucedido',
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        cargo: usuario.cargo
      },
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

export const addConsulta = async (req, res) => {
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

export const deletarConsulta = async (req, res) => {
  try {
    const { id } = req.params;

    await db.Consulta.destroy({ where: { id } });

    res.status(201).json({
      mensagem: 'Consulta deletada com sucesso',
    });
  } catch (err) {
    res.status(400).json({
      erro: 'Erro ao deletar Consulta',
      detalhes: err.message
    });
  }
}

export const editarConsulta = async (req, res) => {
  try {
    const { id, horario, medico, emailUser } = req.body;
    // const {horario, medico, emailUser} = req.body


    const novaConsulta = await db.Consulta.update({ horario, medico, emailUser }, { where: { id } });

    if (novaConsulta[0] === 0) {
      res.status(400).json({
        mensagem: 'Id inexistente',
      });
    }

    res.status(201).json({
      mensagem: 'Consulta editada com sucesso',
      consulta: novaConsulta
    });
  } catch (err) {
    res.status(400).json({
      erro: 'Erro ao editar Consulta',
      detalhes: err.message
    });
  }
}

export const verConsulta = async (req, res) => {
  try {

    const consultas = await db.Consulta.findAll();

    res.json(consultas)
  } catch (err) {
    res.status(500).json({
      erro: 'Erro ao ver Consulta',
      detalhes: err.message
    });
  }
}
