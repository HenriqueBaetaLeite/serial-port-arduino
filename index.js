const { SerialPort, ReadlineParser } = require("serialport");
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const path = require("path");

const port = new SerialPort(
  { path: "/dev/cu.usbmodem12301", baudRate: 9600 },
  (err) => {
    if (err) return console.log("Error:", err.message);
  }
);

const parser = new ReadlineParser({ delimiter: "\r\n" });
port.pipe(parser);

const app = express();
const httpServer = createServer(app);
const socket = new Server(httpServer);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (_req, res) => res.sendFile("index.html"));

socket.on("connection", (socket) => {
  console.log("Client socket connected:", socket.id);

  parser.on("data", (data) => {
    console.log(data);
    socket.emit("ioArduino", data);
  });
});

httpServer.listen(3000, () => console.log("O pai ta on..."));

// port.write("main screen turn on", (err) => {
//   if (err) {
//     return console.log("Error writing: ", err.message);
//   }
//   console.log("Message written");
// });

// port.on("data", function (data) {
//   parser.on("data", (data) => {
//     console.log(data);
//   });
// });
