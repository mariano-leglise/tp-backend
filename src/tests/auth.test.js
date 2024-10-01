// src/tests/auth.test.js
const request = require('supertest'); // Asegúrate de que tienes esto si usas supertest
const { Usuario } = require('../models/usuario'); // Ajusta la ruta según sea necesario

describe('Auth API', () => {
    beforeAll(async () => {
        await Usuario.sync({ force: true }); // Reinicia la tabla para cada prueba
        await Usuario.create({
            nombre: 'Test User',
            email: 'test@example.com',
            password: 'password123',
        });
    });
  
    afterAll(async () => {
        await Usuario.sequelize.close(); // Cierra la conexión después de las pruebas
    });
  
    it('Debe iniciar sesión correctamente', async () => {
        const response = await request.post('/auth/login').send({
            email: 'test@example.com',
            password: 'password123',
        });
  
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('token'); // Asegúrate de que tu API devuelva un token
    });
  
    it('No debe permitir iniciar sesión con credenciales incorrectas', async () => {
        const response = await request.post('/auth/login').send({
            email: 'test@example.com',
            password: 'wrongpassword', // Contraseña incorrecta
        });
  
        expect(response.status).toBe(401);
        expect(response.body.error).toBe('Credenciales inválidas'); // Asegúrate de que este mensaje exista en tu manejo de errores
    });
});
