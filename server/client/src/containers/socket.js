import io from 'socket.io-client';



var socket = io('http://localhost:8000', {
  transports: ['websocket', 'polling']
});


export default socket