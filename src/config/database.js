
const { Sequelize } = require('sequelize');

// Configuración de la conexión
const sequelize = new Sequelize('nombre_base_de_datos', 'usuario', 'contraseña', {
  host: 'localhost',
  dialect: 'mysql', 
});

module.exports = sequelize;
