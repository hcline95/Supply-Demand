const server = require('http').createServer();
const express = require('express');
const line = require('./formula')
var mysql = require('mysql');

//connects SQL database


//sets up socket
const io = require('socket.io')(server, {
  transports: ['websocket', 'polling']
});

//days for graphs
let day = 0

//connects to socket
io.on('connection', client => {
    console.log('Client connected...'); 
    //waits for click on client side to start sending intervals back
    client.on('myClick', (data) => {

        //returns the the table
        pool.query('SELECT * FROM Supply_Demand', function (error, results, fields) {
            // error will be an Error if one occurred during the query
            if (error) throw error;
            // results will csend the table
        
            results.map((row, i)=>{
                 setTimeout(() => {
                    console.log(i)
                    //price graph
                    day = day + 1
                    io.emit('number', {name:`Day ${day}`, value:row.price})

                    //main supply and demand graph
                    io.emit('mainGraph', {demand:[{x:row.demand1x, y:row.demand1y}, {x:row.demand2x, y:row.demand2y}], supply:[{x:row.supply1x, y:row.supply1y}, {x:row.supply2x, y:row.supply2y}], equalibrium: row.equal})

                }, i * 3000);
            });
        });
    })
});

server.listen(8000);
