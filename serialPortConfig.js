const { SerialPort, ReadlineParser } = require("serialport");

const config = {
  path: "/dev/cu.usbmodem12401",
  baudRate: 9600,
};

const port = new SerialPort(config, (err) => {
  if (err) return console.error(err.message);
});

const parser = new ReadlineParser({ delimiter: "\r\n" });

port.pipe(parser);

module.exports = parser;

// this way I can list the ports
// (SerialPort.list().then(data => console.log(data)))
