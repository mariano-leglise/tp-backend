
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const Usuario = require('./usuario');

class Recibo extends Model {}

Recibo.init({
  archivo: DataTypes.STRING,
}, { sequelize, modelName: 'recibo' });

Recibo.belongsTo(Usuario, { foreignKey: 'usuarioId' });

module.exports = Recibo;
