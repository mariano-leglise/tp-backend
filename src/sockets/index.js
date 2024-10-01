
const socketIO = require('socket.io');

module.exports = (server) => {
  const io = socketIO(server);

  io.on('connection', (socket) => {
    console.log('Administrador conectado');

    socket.on('nuevo-pago', (data) => {
      io.emit('actualizacion-pagos', data);  // Notificar a todos los admins
    });

    socket.on('disconnect', () => {
      console.log('Administrador desconectado');
    });
  });
};
