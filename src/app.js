
const express = require('express');
const app = express();

// Middlewares y rutas
app.use(express.json());

// Rutas
app.use('/api/usuarios', require('./routes/usuarios'));

// Manejo de errores
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || 'Error interno del servidor',
  });
});

module.exports = app;  
