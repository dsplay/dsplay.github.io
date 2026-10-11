---
parent: dsplay_media
grand_parent: Templates HTML
nav_order: 17
permalink: /pt/docs/html-templates/dsplay_media/menuboard.html
title: Cardápio digital
---
# Cardápio digital

Usado pelo template [Menu Board](https://github.com/dsplay/dsplay-templates/tree/main/templates/menuboard). É uma media de [JSON Service](./json-service).

```js
var dsplay_media = {
  // Todos os campos gerais também estão incluídos...

  // Específicos do Menu Board
  result: {
    version: '1.0.0',
    validity: '2000-07-20 00:00:00', // Validade do resultado
    showOutdated: true, // Continua exibindo após a validade
    data: {
      categories: [
        {
          cod: 1, // Código da categoria
          title: 'Esfihas', // Título da categoria
          priceTitles: ['Preço'], // Título de cada coluna de preço
          items: [
            {
              num: '', // Número do item (opcional)
              title: 'Esfiha de Carne', // Título do item
              description: '', // Descrição do item (opcional)
              price1: '1,49', // Preço da primeira coluna. price2, price3... seguem priceTitles
            },
          ],
        },
      ],
    },
  },
}
```
