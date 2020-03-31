const server = require('http').createServer();


const io = require('socket.io')(server, {
  transports: ['websocket', 'polling']
});

let day = 0

//connects to socket
io.on('connection', client => {
    console.log('Client connected...'); 
    //waits for click on client side to start sending intervals back
    client.on('myClick', (data) => {
        setInterval(() => {
        
        //sends back random number for now
        let number = Math.random() * 100

        day = day + 1
        io.emit('number', {name:`Day ${day}`, value:number})
        }, 3000);
    })
});

server.listen(8000);
