const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: ':memory:', // Puedes cambiar esto a un archivo en disco si es necesario
  logging: console.log, // Esto es útil para depuración
});

module.exports = sequelize;
