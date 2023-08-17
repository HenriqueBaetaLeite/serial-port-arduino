![Screenshot](./public/climateApp.png)

# Serial port with arduino

Esse projeto nasceu da ideia de compartilhar meus feitos. Criei um programa em Arduino utilizando um sensor DHT11 de temperatura e umidade, onde transmito através da porta serial e usando a biblioteca serialPort recebo os dados em um servidor NodeJS. O servidor usando a biblioteca socket.io envia os dados para o cliente, que por sua vez, utiliza a biblioteca chart.js para plotar os dados em um gráfico.

## Funcionamento

A parte de Arduino / Hardware eu deixo pra depois.

Quando o servidor é iniciado, faço a conexão com a porta serial e com o banco de dados (ainda precisa de ajustes). Independente de ter cliente conectado, o servidor recebe os dados do Arduino e salva no banco.
Quando o cliente se conecta, inicialmente, recebe as informações em tempo real, sem acesso ao banco de dados. No dashboard à ser criado no front-end, teremos opção de ver históricos existentes da temperatura, rotas com todos os registros de clima, média, máxima e mínima.

### fontes:
https://www.chartjs.org/docs/latest/

https://serialport.io/

https://www.chartjs.org/docs/latest/samples/line/segments.html

https://www.youtube.com/watch?v=EzLKYBT3FlE

https://themewagon.com/themes/free-bootstrap-4-html5-admin-dashboard-template-dashtreme/

#### cores:
https://materialui.co/colors/