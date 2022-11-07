# Sobre

App de condições meteorológicas em React JS, voltado para estados e cidades brasileiras. Utiliza as APIs do OpenWeather.

# APIs

Foram utilizadas duas APIs disponibilizadas pelo OpenWeather: 

* Current weather data
* Geocoding API

## Current weather data

Permite que você acesse informações em tempo real de condições meteorológicas de mais de 200k cidades ao redor do mundo. Os dados estão disponíveis em formato JSON, XML ou HTML. 

Para mais informações: [Current weather data](https://openweathermap.org/current)

## Geocoding API

Permite converter coordenadas geográficas para nomes de localidades próximas (informando o nome de cidade e país, por exemplo).

Para mais informações: [Geocoding API](https://openweathermap.org/api/geocoding-api)

# Onde obter a lista das cidades brasileiras disponíveis na API do OpenWeather?

O OpenWeather disponibiliza um arquivo que mostra as localidades disponíveis na plataforma. Esse arquivo pode ser acessado através do seguinte link:

* [Index of /sample/](http://bulk.openweathermap.org/sample/)

Uma vez acessado o link, você terá uma lista de arquivos disponíveis para download em formato .gz (compactados).

O arquivo de interesse é o city.list.json.gz, que contém um JSON com as cidades disponíveis no OpenWeather.

As cidades brasileiras são aquelas com atributo "country" igual a "BR".

Observe que as cidades brasileiras possuem atributos "state" sem os seus respectivos valores. Para isso, você pode usar a API de Geocoding do próprio OpenWeather, que fornece os estados brasileiros das localidades disponíveis nesse arquivo JSON. 

# Extra

Este projeto foi criado com [Create React App](https://github.com/facebook/create-react-app).

No projeto, você pode usar o comando `npm start` que executa o app em modo de desenvolvimento.

Uma vez executado esse comando, abra [http://localhost:3000](http://localhost:3000) para vê-lo no seu navegador.
