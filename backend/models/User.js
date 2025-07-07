import bcrypt from 'bcryptjs';
import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const User = sequelize.define('Users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    senha: DataTypes.STRING,
    cargo: {
      type: DataTypes.ENUM('admin', 'paciente'),
      defaultValue: 'paciente'
    }
  });

  User.beforeCreate(async (user) => {
    user.senha = await bcrypt.hash(user.senha, 10);
  });

  return User;
};