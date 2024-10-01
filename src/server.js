const express = require('express');
const bodyParser = require('body-parser');
const usuarioRoutes = require('./routes/usuario'); 
const authRoutes = require('./routes/auth');         
const { sequelize } = require('./models');           

const app = express();

// Middleware
app.use(bodyParser.json());
app.use('/usuarios', usuarioRoutes);
app.use('/auth', authRoutes);

// Evita que el servidor escuche en puerto 3001 durante las pruebas
if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, async () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
    await sequelize.sync({ force: false });
  });
}

module.exports = app;
