const express =  require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
app.use((socket, next) => {next()});



const io = new Server(httpServer, { 
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    },
    upgradeTimeout: 30000,
    maxHttpBufferSize: 1e8
 });

io.on("connection", (socket) => {
  console.log("user connected");
  socket.on('send-message', (data) => {
    console.log("received message", data);
    socket.to(data.channelId).emit('send-message', data)
  })
  socket.on('join-channel', (data) => {
    console.log("will join channel", data);
    socket.join(data)
  })

});


httpServer.listen(8700);
console.log("server listening on port 8700");