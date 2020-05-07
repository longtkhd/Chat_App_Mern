const express = require('express')
const http = require('http')
const socketio = require('socket.io')

const app = express()

const port = process.env.PORT || 5000

const server = http.createServer(app)
const io = socketio(server);

app.use('/',(req,res) => {
  res.send('home page');
})

io.on('connection',  (socket) => {
  console.log('we have the connection')
  
  socket.on('disconnect',  () => { 
    console.log('User had left !!')

  }); // listen to the event
});


server.listen(port, () => {
  console.log('server is running on port ' + port);
})