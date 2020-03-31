import io from 'socket.io-client';
import React from 'react';


var socket = io('http://localhost:8000', {
  transports: ['websocket', 'polling']
});


export default socket