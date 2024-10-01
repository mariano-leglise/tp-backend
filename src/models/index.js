const { Sequelize, DataTypes } = require('sequelize');

// Cambia la configuración de acuerdo a tu entorno
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', 
});

// modelo de Usuario
const Usuario = sequelize.define('Usuario', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: 'user',
  },
}, {
  timestamps: true,
});

module.exports = {
  sequelize,
  Usuario,
};
