const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const path = require("path");
const parser = require("./serialPortConfig");

const generateDataResults = require("./service/serviceData");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

const PORT = process.env.PORT || 3003;
const publicPath = path.join(__dirname, "../", "public2");

app.use(express.static(publicPath));

io.on("connection", (socket) => {
  console.log("Client socket connected:", socket.id);

  parser.on("data", (data) => {
    const [temperature, humidity] = data.split("|");

    const temperatureResults = generateDataResults(
      "temperature",
      Number(temperature)
    );

    const humidityResults = generateDataResults("humidity", Number(humidity));

    socket.emit("ioArduino", temperatureResults, humidityResults);
  });
});

httpServer.listen(PORT, () => console.log(`O pai ta on... ${PORT}`));
