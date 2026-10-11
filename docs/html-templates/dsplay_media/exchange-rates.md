---
parent: dsplay_media
grand_parent: HTML Templates
nav_order: 16
---
# Exchange Rates (BCB)

Used by the [BCB Exchange Rates](https://github.com/dsplay/dsplay-templates/tree/main/templates/bcb-exchange-rates) template. It is a [JSON Service](./json-service) media with data from the Central Bank of Brazil.

```js
var dsplay_media = {
  // All general fields are also included...

  // Exchange Rates specific
  result: {
    version: '1.0.0',
    validity: '2017-07-21 23:59:59', // Result validity
    exchanges: { // One key per currency code
      USD: {
        buy: {
          name: 'Taxa de câmbio - Livre - Dólar americano (compra)', // Series name
          code: '10813', // Series code
          value: 3.1396, // Rate
          date: '2017-7-20', // Rate date
        },
        sell: { /* same fields as buy */ },
      },
    },
  },
}
```
