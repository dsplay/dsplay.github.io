---
parent: dsplay_media
grand_parent: Templates HTML
nav_order: 1
permalink: /pt/docs/html-templates/dsplay_media/image.html
title: Mídia de imagem
---
# Mídia de imagem

Usada pelos templates [Image](https://github.com/dsplay/dsplay-templates/tree/main/templates/image) e [Photo Collage](https://github.com/dsplay/dsplay-templates/tree/main/templates/photo-collage).

```js
var dsplay_media = {
  // Todos os campos gerais também são incluídos...

  // Específicos da mídia de imagem
  images: ['/path/to/image/1', '/path/to/image/2'], // Caminhos de todas as imagens da mídia
  imagePath: '/path/to/image/1', // Imagem selecionada para esta exibição (rodízio por `iteration`, ou aleatória se a mídia estiver configurada como aleatória)
  size: 'contain', // Como a imagem deve se ajustar à tela. Sempre 'contain'
}
```
