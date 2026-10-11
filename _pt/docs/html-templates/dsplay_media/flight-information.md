---
parent: dsplay_media
grand_parent: Templates HTML
nav_order: 12
permalink: /pt/docs/html-templates/dsplay_media/flight-information.html
title: Informações de voo
---
# Informações de voo

Usado pelo template [Flight Information](https://github.com/dsplay/dsplay-templates/tree/main/templates/flight-information). Os voos são buscados pelo template em [aviation-edge.com](https://aviation-edge.com/).

```js
var dsplay_media = {
  // Todos os campos gerais também estão incluídos...

  // Específicos do Flight Information
  apiKey: 'xxxxxx-xxxxxx', // Chave de API do aviation-edge.com
  iataCode: 'LIS', // Código IATA do aeroporto
  arrivalDeparture: 'arrival', // Qual lista exibir: 'arrival' ou 'departure'
  offsetTimeMinutes: -240, // Deslocamento de tempo, em minutos, usado para filtrar voos mais antigos
  maxPageDurationSeconds: 10, // Máximo de segundos que cada página de voos fica na tela (padrão 60)
}
```

`duration` é dividido igualmente entre as páginas de voos, até `maxPageDurationSeconds` por página.
