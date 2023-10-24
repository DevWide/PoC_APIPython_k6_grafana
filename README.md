# PoC sobre API em python com Flask e integração com o K6 para teste de performance e métricas no Grafana Cloud.

# Itens utlizados neste projeto:
* Nesta PoC (Prova de Conceito) utilizei o Python para montar uma API com o Flask que é um micro-framework voltado para projetos WEB e APIs Server, concorrente do Django.

* Na pasta **templates**, temos os arquivos de HTML refente ao front-end que montei para visualiarmos os filmes desta API.

* O arquivo **main.js** é referente a rota desta API quando for chamada no front-end.

* Na pasta **Static** temos o arquivo style.css referente ao design de nosso front-end.

* o arquivo **script.js** é referente ao nosso teste de performance com o K6 tendo integração com o K6 cloud.

## Para executar o projeto:

### Executando a API:
Para executar a API, precisar estar dentro da pasta raiz do projeto e rodar o seguinte comando:
````
python3 app.py
````

### Executando os testes de performance K6 (localmente):
Para executar o projeto do K6, deverá rodar o seguinte comando:
````
k6 run script.js
````

### Para executar com integração na cloud K6
````
k6 cloud script.js
````

