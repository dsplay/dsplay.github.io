---
parent: dsplay_media
grand_parent: Templates HTML
nav_order: 4
permalink: /pt/docs/html-templates/dsplay_media/weather.html
title: Mídia de previsão do tempo
---
# Mídia de previsão do tempo

Usada pelo template [Weather Forecast](https://github.com/dsplay/dsplay-templates/tree/main/templates/weather-forecast). Clima atual e previsão para 4 dias. A localização é a da mídia, com fallback para a do dispositivo e depois para a do terminal.

```js
var dsplay_media = {
  // Todos os campos gerais também são incluídos...

  // Específicos da mídia de previsão do tempo
  title: 'Weather Forecast', // Título da mídia localizado ("Weather Forecast" / "Previsão do Tempo")
  rawResult: '{...}', // Resposta do serviço, como string
  result: { // Resposta do serviço, como objeto
    data: {
      weather: {
        city: 'Recife',
        state: 'PE', // Código do estado
        country: 'BR', // Código do país
        current: {
          code: 802, // Código da condição do tempo (https://www.weatherbit.io/api/codes)
          description: 'Nuvens dispersas', // Descrição da condição, no idioma da mídia
          icon: 'c02d', // Código do ícone do Weatherbit
          temp: 27.3, // Temperatura atual, em °C
          value: 27.3, // Igual a temp
          min: 24.0, // Mínima de hoje, em °C
          max: 30.1, // Máxima de hoje, em °C
          humidity: 78, // Umidade relativa, %
          wind: 4.2, // Velocidade do vento, em m/s
          uv: 7, // Índice UV
          sunrise: '08:12', // Horário do nascer do sol (UTC)
          sunset: '20:41', // Horário do pôr do sol (UTC)
          date: '2026-10-11T12:00:00.000Z', // Data da leitura (ISO 8601)
        },
        forecast: [ // Próximos 4 dias. Cada item tem os mesmos campos de `current`
          { date: '2026-10-12T00:00:00.000Z', code: 804, min: 23.5, max: 29.0 /* ... */ },
        ],
      },
    },
  },
}
```
