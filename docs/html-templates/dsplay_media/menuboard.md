---
parent: dsplay_media
grand_parent: HTML Templates
nav_order: 17
---
# Menu Board

Used by the [Menu Board](https://github.com/dsplay/dsplay-templates/tree/main/templates/menuboard) template. It is a [JSON Service](./json-service) media.

```js
var dsplay_media = {
  // All general fields are also included...

  // Menu Board specific
  result: {
    version: '1.0.0',
    validity: '2000-07-20 00:00:00', // Result validity
    showOutdated: true, // Keep showing after the validity
    data: {
      categories: [
        {
          cod: 1, // Category code
          title: 'Esfihas', // Category title
          priceTitles: ['Preço'], // Title of each price column
          items: [
            {
              num: '', // Item number (optional)
              title: 'Esfiha de Carne', // Item title
              description: '', // Item description (optional)
              price1: '1,49', // Price of the first column. price2, price3... follow priceTitles
            },
          ],
        },
      ],
    },
  },
}
```
