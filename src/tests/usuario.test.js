// src/tests/usuario.test.js
const request = require('supertest'); // Asegúrate de que tienes esto si usas supertest
const { Usuario } = require('../models/usuario'); // Ajusta la ruta según sea necesario

describe('Usuario API', () => {
    beforeAll(async () => {
        await Usuario.sync({ force: true }); // Reinicia la tabla para cada prueba
    });
  
    afterAll(async () => {
        await Usuario.sequelize.close(); // Cierra la conexión después de las pruebas
    });
  
    it('Debe crear un nuevo usuario', async () => {
        const response = await request.post('/usuarios').send({
            nombre: 'John Doe',
            email: 'john@example.com',
            password: 'password123',
        });
  
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body.email).toBe('john@example.com');
    });
  
    it('No debe permitir crear un usuario con email duplicado', async () => {
        const response = await request.post('/usuarios').send({
            nombre: 'Duplicate User',
            email: 'john@example.com',
            password: 'password123',
        });
  
        expect(response.status).toBe(400);
        expect(response.body.error).toBe('El email ya está en uso'); // Asegúrate de que tu API devuelva el mensaje correcto
    });
});
