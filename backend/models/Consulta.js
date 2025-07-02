import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Consulta = sequelize.define('Consultas', {
    horario: {
      type: DataTypes.ENUM('10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'),
      allowNull: false
    },
    medico: {
        type: DataTypes.ENUM('Raul Maui', 'Leonardo Dreher', 'Thiago Dev'),
        allowNull: false
    },
    emailUser: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'email'
        }
    }
  },{
    indexes: [
        {
            unique: true,
            fields: ['medico', "horario"]
        }
    ]
  });

  return Consulta;
};