#include <DHT.h>
#include <neotimer.h>

const int dht_pino = 8;

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
    float temp = dht.readTemperature();
    float hum = dht.readHumidity();
    String separator = "|";
    Serial.println(temp + separator + hum);
  }
}