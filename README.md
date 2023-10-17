# Aplicativo de monitoramento de temperatura e umidade

<img src="./public/screenShot.png" alt="front-end example" width="250"/>

Esse projeto nasceu da ideia de compartilhar meus feitos. Criei um programa em Arduino utilizando um sensor DHT11 de temperatura e umidade, onde transmito através da porta serial e usando a biblioteca serialPort recebo os dados em um servidor NodeJS. O servidor usando a biblioteca socket.io envia os dados para o cliente, que por sua vez, utiliza a biblioteca chart.js para plotar os dados em um gráfico.

 <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTh3OGFkOXptOTJ6aHJwbWVkOXhibTJsdG5iOXlsa3NjYmI1MWs4diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EIiJp9cQ3GeEU/giphy.gif" alt="drawing" width="150"/>


## Funcionamento

Quando o servidor é iniciado, faço a conexão com a porta serial e com o banco de dados (ainda precisa de ajustes). Independente de ter cliente conectado, o servidor recebe os dados do Arduino e salva no banco.
Quando o cliente se conecta, inicialmente, recebe as informações em tempo real, sem acesso ao banco de dados. No dashboard à ser criado no front-end, teremos opção de ver históricos existentes da temperatura, rotas com todos os registros de clima, média, máxima e mínima.

Este é um diagrama representando as tecnologias aplicadas neste projeto.

<img src="./public/climateApp.png" alt="diagram" width="250"/>


## Como rodar o projeto em sua máquina
- Após clonar o repositório, instale as dependências com `npm install`. Para de fato iniciar você precisa de um arduino (qualquer modelo) e um sensor DHT11, faça as ligações de acordo com a documentação e carregue o arquivo **[arduinoTempController.ino](https://github.com/HenriqueBaetaLeite/serial-port-arduino/blob/main/src/arduinoTempController.ino)** contido na pasta src do projeto, lembrando de verificar o pino utilizado e modificar se preciso no arquivo.

- Com o arduino conectado no computador, verifique através da IDE própria, usando o monitor, se os dados aparecem corretamente.

- Verifique no menu Ferramentas qual a porta o arduino está conectado e no arquivo /src/serialPortConfig.js na linha 4, troque o valor da chave “path” para o valor encontrado na IDE.

- Feche o monitor da IDE e o projeto está pronto para ser iniciado com `npm start` ou `npm run dev` em modo de desenvolvimento.

- Abra o browser na url [localhost:3003](http://localhost:3003) e acompanhe em tempo real os dados de temperatura de umidade do seu ambiente.

### fontes:
https://www.chartjs.org/docs/latest/

https://serialport.io/

https://www.chartjs.org/docs/latest/samples/line/segments.html

https://www.youtube.com/watch?v=EzLKYBT3FlE

https://themewagon.com/themes/free-bootstrap-4-html5-admin-dashboard-template-dashtreme/

#### cores:
https://materialui.co/colors/