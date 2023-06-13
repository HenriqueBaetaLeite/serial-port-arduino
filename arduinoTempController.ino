#include <DHT.h>
#include <neotimer.h>

const int dht_pino = 53;

//#define DHT_TYPE DHT11
const int DHT_TYPE = DHT11;

long oneMinute = 60000;
Neotimer timerTemperature = Neotimer(oneMinute);

DHT dht(dht_pino, DHT_TYPE);

void setup() {
  Serial.begin(9600);

  dht.begin();
}

void loop() {
  if (timerTemperature.repeat()) {
    Serial.println(String(dht.readTemperature()));
  }
  //  Serial.println(String(dht.readTemperature()));
  //  delay(60000);
  //  Serial.println(String(dht.readHumidity()));
  //  delay(5000);
}