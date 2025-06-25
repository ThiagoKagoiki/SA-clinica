const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    usuario: DataTypes.STRING,
    email: { 
      type: DataTypes.STRING,
      unique: true
    },
    senha: DataTypes.STRING,
    cargo: {
      type: DataTypes.ENUM('admin', 'medico', 'recepcionista'),
      defaultValue: 'recepcionista'
    }
  });


  User.beforeCreate(async (user) => {
    user.senha = await bcrypt.hash(user.senha, 10); 
  }); 

  return User;
};