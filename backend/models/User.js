import bcrypt from 'bcryptjs';
import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const User = sequelize.define('Users', {
    nome: DataTypes.STRING, // Nome do usuário
    email: {
      type: DataTypes.STRING,
      unique: true // Garante que o e-mail não se repita
    },
    senha: DataTypes.STRING, // Senha que será criptografada
    cargo: {
      // Enum para cargos permitidos
      type: DataTypes.ENUM('admin', 'paciente'),
      defaultValue: 'paciente' // padrão ao criar usuário
    }
  });

  User.beforeCreate(async (user) => {
    user.senha = await bcrypt.hash(user.senha, 10); // Criptografa a senha
  });

  return User;
};