
const express = require('express');
const { Usuario } = require('../models');

const router = express.Router();

router.post('/', async (req, res) => {
  const { nombre, email, password } = req.body;

  try {
    const nuevoUsuario = await Usuario.create({ nombre, email, password });
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.error(error); // Para depuración

    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ error: 'El email ya está en uso' });
    }

    res.status(500).json({ error: 'Error al crear usuario' });
  }
});

module.exports = router;
