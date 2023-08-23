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

  let maxTemperature = 0;
  let minTemperature = 40;

  let maxHumidity = 0;
  let minHumidity = 100;

  parser.on("data", (data) => {
    const [temperature, humidity] = data.split("|");

    const temperatureData = {
      data: Number(temperature),
      maxData: Number(maxTemperature),
      minData: Number(minTemperature),
    };

    // const temperatureResults = generateDataResults(temperatureData);

    const humidityData = {
      data: Number(humidity),
      maxData: Number(maxHumidity),
      minData: Number(minHumidity),
    };
    const humidityResults = generateDataResults(humidityData);

    console.log("server", humidityResults);

    socket.emit("ioArduino", temperature, humidity, humidityResults);
  });
});

httpServer.listen(PORT, () => console.log(`O pai ta on... ${PORT}`));
