const { SerialPort, ReadlineParser, ReadyParser } = require("serialport");

const port = new SerialPort(
  { path: "/dev/cu.usbmodem12301", baudRate: 9600 },
  (err) => {
    if (err) return console.log("Error:", err.message);
  }
);

const express = require('express');

const app = express();

app.use(express.json());

app.listen(3000, () => console.log("O pai ta on..."));

const parser = new ReadlineParser({ delimiter: "\r\n" });

port.pipe(parser);

// port.write("main screen turn on", (err) => {
//   if (err) {
//     return console.log("Error writing: ", err.message);
//   }
//   console.log("Message written");
// });

// port.on("open", () => {
//   console.log("Connected...");

//   parser.on("data", (data) => {
//     console.log(data);
//   });
// });

// port.on("readable", () => {
//   console.log(port.read());
// });

// port.on("data", function (data) {
//   parser.on("data", (data) => {
//     console.log(data);
//   });
// });

parser.on("data", (data) => {
  console.log(data);
});
