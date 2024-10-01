const express = require('express');
const jwt = require('jsonwebtoken'); 
const bcrypt = require('bcrypt'); 
const { Usuario } = require('../models'); 
const router = express.Router();

// Iniciar sesión
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const usuario = await Usuario.findOne({ where: { email } });
    
    if (!usuario) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const match = await bcrypt.compare(password, usuario.password);
    if (!match) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const token = jwt.sign({ id: usuario.id, role: usuario.role }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error); // Para depuración
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
});

module.exports = router;
