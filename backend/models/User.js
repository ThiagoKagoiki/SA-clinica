import bcrypt from 'bcryptjs';
import { DataTypes } from 'sequelize'; // Import DataTypes directly

// Export a function that takes sequelize as an argument
export default (sequelize) => {
  const User = sequelize.define('User', {
    nome: DataTypes.STRING, // Nome do usuário
    email: {
      type: DataTypes.STRING,
      unique: true // Garante que o e-mail não se repita
    },
    senha: DataTypes.STRING, // Senha que será criptografada
    cargo: {
      // Enum para cargos permitidos
      type: DataTypes.ENUM('admin', 'medico', 'recepcionista'),
      defaultValue: 'recepcionista' // padrão ao criar usuário
    }
  });

  User.beforeCreate(async (user) => {
    user.senha = await bcrypt.hash(user.senha, 10); // Criptografa a senha
  });

  return User;
};