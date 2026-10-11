---
parent: dsplay_media
grand_parent: Templates HTML
nav_order: 13
permalink: /pt/docs/html-templates/dsplay_media/building-directions.html
title: Direções no prédio
---
# Direções no prédio

Usado pelo template [Building Directions Board](https://github.com/dsplay/dsplay-templates/tree/main/templates/building-directions-board).

```js
var dsplay_media = {
  // Todos os campos gerais também estão incluídos...

  // Específicos do Building Directions
  logo: '/path/to/logo', // Logo do painel (opcional)
  maxPageDurationSeconds: 10, // Máximo de segundos que cada página de destinos fica na tela (padrão 60)
  targets: [ // Destinos, paginados para caber na tela
    {
      name: 'Recepção', // Nome do destino
      place: 'Andar 1', // Descrição do local
      floor: 'Térreo', // Andar
      direction: 'down_left', // up, up_right, right, down_right, down, down_left, left, up_left
      logo: '/path/to/logo', // Logo do destino (opcional)
    },
  ],
}
```
