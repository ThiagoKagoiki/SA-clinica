import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import UserModel from './User.js'; // Note a extensão .js obrigatória
import ConsultaModel from './Consulta.js';

dotenv.config(); // Carrega variáveis do .env

// Cria conexão com o PostgreSQL usando Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
);

// Exporta a instância do banco e os modelos
const db = {
  Sequelize,
  sequelize,
  User: UserModel(sequelize),
  Consulta: ConsultaModel(sequelize)
};

export default db;
