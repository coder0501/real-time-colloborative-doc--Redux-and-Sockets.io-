const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors'); // Import CORS

const app = express();
const server = http.createServer(app);
// const io = socketIo(server);

app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(express.json());

// Set up Socket.IO with CORS configuration
const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:5173', // Your frontend origin
    methods: ['GET', 'POST'],
    credentials: true,
  },
});


io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('documentUpdate', (data) => {
    // socket.broadcast.emit('documentUpdate', data);
    socket.emit('documentUpdate', data); // sends 

    console.log("inside documnet update",data)
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});



server.listen(process.env.PORT || 5000, () => console.log('Server running on port 5000'));
