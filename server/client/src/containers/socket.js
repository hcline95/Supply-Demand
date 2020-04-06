import io from 'socket.io-client';



var socket = io('/', {
  transports: ['websocket', 'polling']
});


export default socket