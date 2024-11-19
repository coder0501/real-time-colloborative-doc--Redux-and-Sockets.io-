import { io } from 'socket.io-client';

const socket = io('http://localhost:5000', {
  transports: ['websocket', 'polling'], // Ensure both websocket and polling are enabled
  withCredentials: true,
});


export default socket;
