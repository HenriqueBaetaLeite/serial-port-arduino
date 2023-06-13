const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const path = require("path");
const parser = require('./serialPortConfig');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.use(express.static(path.join(__dirname, "public")));

io.on("connection", (socket) => {
  console.log("Client socket connected:", socket.id);

  parser.on("data", (data) => {
    const [temperature, humidity] = data.split('|');
    
    socket.emit("ioArduino", temperature);
  });
});

httpServer.listen(3000, () => console.log("O pai ta on..."));
