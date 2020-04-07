const server = require('http').createServer();
const express = require('express');
const line = require('./formula')
var mysql = require('mysql');
const keys = require('./config/keys');
const port = process.env.PORT || 8000;

//connects SQL database
var pool  = mysql.createPool(keys.CLEARDB_DATABASE_URL);

//sets up socket
// const io = require('socket.io')(server, {
//   transports: ['websocket', 'polling']
// });



// //connects to socket
// io.on('connection', client => {
//     console.log('Client connected...'); 
//     //waits for click on client side to start sending intervals back
//     client.on('myClick', (data) => {
       
//         //returns the the table from supply and demand
//         pool.query('SELECT * FROM Supply_Demand', function (error, results, fields) {
//             // error will be an Error if one occurred during the query
//             if (error) throw error;

//             results.map((row, i)=>{
//                  setTimeout(() => {

//                     console.log(row.stage)
//                     //returns suppliers table where the stage ID = to the row.stage id
//                     pool.query(`SELECT * FROM suppliers where stage = ${row.stage}`, function (error, suppliers, fields) {
//                     // error will be an Error if one occurred during the query
//                     if (error) throw error;

//                     io.emit('suppliers', suppliers)
//                     })

//                     io.emit('stage', row.stage)

//                     io.emit('diary', {day: `Day ${row.stage * 2}`, price:row.price, quantity:row.quantity, description:row.description})
                
//                     io.emit('quantity', {Quantity: row.quantity})
//                     //price graph
                   
//                     io.emit('number', {name:`Day ${row.stage * 2}`, value:row.price})

//                     //main supply and demand graph
//                     io.emit('mainGraph', {demand:[{x:row.demand1x, y:row.demand1y}, {x:row.demand2x, y:row.demand2y}], supply:[{x:row.supply1x, y:row.supply1y}, {x:row.supply2x, y:row.supply2y}], equalibrium: row.equal})
                    

//                 }, i * 2000);
//             });
//         });
//     })
// })


// io.on('connection', client => {
//     client.on('myClickRandom', (data) => {
//         console.log('clicked')
  
//     pool.query('SELECT * FROM random', function (error, results, fields) {
//         // error will be an Error if one occurred during the query
//         if (error) throw error;
      

//         results.map((row, i)=>{
//              setTimeout(() => {
//                  console.log(row.stage)
//                 io.emit('random', row )

//                 io.emit('diary', {day: `Day ${row.stage}`, price:row.price, quantity:row.quantity, description:row.description})
    
//                 io.emit('quantity', {Quantity: row.quantity})
//                 //price graph
               
//                 io.emit('number', {name:`Day ${row.stage}`, value:row.price})

//                 //main supply and demand graph
//                 io.emit('mainGraph', {demand:[{x:row.demand1x, y:row.demand1y}, {x:row.demand2x, y:row.demand2y}], supply:[{x:row.supply1x, y:row.supply1y}, {x:row.supply2x, y:row.supply2y}]})

//             }, i * 2000);
//         });
//     });
 
// })

// })


server.listen(port);
