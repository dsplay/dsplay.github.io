---
parent: dsplay_media
grand_parent: Templates HTML
nav_order: 3
permalink: /pt/docs/html-templates/dsplay_media/rss.html
title: Mídia RSS
---
# Mídia RSS

Usada pelo template [RSS](https://github.com/dsplay/dsplay-templates/tree/main/templates/rss). A cada exibição, um item aleatório entre os mais recentes é selecionado.

```js
var dsplay_media = {
  // Todos os campos gerais também são incluídos...

  // Específicos da mídia RSS
  itemTitle: 'Título do item', // Título do item RSS
  itemDescription: 'Descrição', // Descrição do item RSS
  itemContent: 'Conteúdo', // Conteúdo do item RSS (atualmente o mesmo texto de itemDescription)
  hasImage: true, // Se o item selecionado tem imagem
  imageUrl: '/path/to/image', // Caminho da imagem do item (somente se hasImage)
  imageTitle: 'Título da imagem', // Título da imagem do item (somente se o feed informar)
  categories: ['Mundo'], // Categorias do item (somente se o item tiver)
  link: 'https://link/to/item', // Link para o item original (somente se o item tiver)
  source: 'CNN', // Nome da fonte, definido na criação do canal RSS
  title: 'Breaking News', // Título da mídia localizado ("Breaking News" / "Últimas Notícias")
}
```

Não há campo de QR Code: um template que precise de um deve gerá-lo a partir de `link`.
