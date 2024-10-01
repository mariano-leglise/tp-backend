
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');

exports.crearUsuario = async (req, res) => {
  try {
    const { nombre, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const usuario = await Usuario.create({ nombre, email, password: hashedPassword, role });
    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ message: "Error al crear el usuario", error });
  }
};

exports.loginUsuario = async (req, res) => {
  // lógica de autenticación
};

exports.listarUsuarios = async (req, res) => {
  // lógica para listar usuarios
};
