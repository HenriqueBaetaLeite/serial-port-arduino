const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const path = require("path");
const parser = require("./serialPortConfig");

const temperatureModel = require("./database/temperatureModel");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

const PORT = process.env.PORT || 3003;
const publicPath = path.join(__dirname, "../", "public");

app.use(express.static(publicPath));

io.on("connection", (socket) => {
  console.log("Client socket connected:", socket.id);

  parser.on("data", async (data) => {
    const [temperature, humidity] = data.split("|");

    await temperatureModel.createRegister(temperature);

    const all = await temperatureModel.getAllRegister();

    console.log(all);

    socket.emit("ioArduino", temperature);
  });
});

httpServer.listen(PORT, () => console.log("O pai ta on..."));
