// src/tests/setup.js
const request = require('supertest');
const app = require('../server'); // Ajusta la ruta si es necesario

// Hacemos que 'request' esté disponible globalmente
global.request = request(app);
