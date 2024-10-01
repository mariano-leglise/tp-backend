
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const Usuario = require('./usuario');

class Pago extends Model {}

Pago.init({
  monto: DataTypes.FLOAT,
  fecha: DataTypes.DATE
}, { sequelize, modelName: 'pago' });

Pago.belongsTo(Usuario, { foreignKey: 'usuarioId' });

module.exports = Pago;
