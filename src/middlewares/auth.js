
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Middleware de autenticación
const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ message: 'Token no provisto' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido' });
  }
};

// Verificar si es admin
const isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Acceso denegado: se requiere rol de administrador' });
  }
  next();
};

// Verificar si es superadmin
const isSuperAdmin = (req, res, next) => {
  if (req.user.role !== 'superadmin') {
    return res.status(403).json({ message: 'Acceso denegado: se requiere rol de superadmin' });
  }
  next();
};

module.exports = {
  authMiddleware,
  isAdmin,
  isSuperAdmin
};
