---
parent: dsplay_media
grand_parent: Templates HTML
nav_order: 16
permalink: /pt/docs/html-templates/dsplay_media/exchange-rates.html
title: Taxas de câmbio (BCB)
---
# Taxas de câmbio (BCB)

Usado pelo template [BCB Exchange Rates](https://github.com/dsplay/dsplay-templates/tree/main/templates/bcb-exchange-rates). É uma media de [JSON Service](./json-service) com dados do Banco Central do Brasil.

```js
var dsplay_media = {
  // Todos os campos gerais também estão incluídos...

  // Específicos do Exchange Rates
  result: {
    version: '1.0.0',
    validity: '2017-07-21 23:59:59', // Validade do resultado
    exchanges: { // Uma chave por código de moeda
      USD: {
        buy: {
          name: 'Taxa de câmbio - Livre - Dólar americano (compra)', // Nome da série
          code: '10813', // Código da série
          value: 3.1396, // Cotação
          date: '2017-7-20', // Data da cotação
        },
        sell: { /* mesmos campos de buy */ },
      },
    },
  },
}
```
