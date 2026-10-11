---
parent: dsplay_media
grand_parent: Templates HTML
nav_order: 7
permalink: /pt/docs/html-templates/dsplay_media/facebook.html
title: Facebook
---
# Facebook

Usada pelos templates [Facebook](https://github.com/dsplay/dsplay-templates/tree/main/templates/facebook-posts). O player baixa as imagens e reescreve seus caminhos para caminhos locais.

```js
var dsplay_media = {
  // Todos os campos gerais também são incluídos...

  // Específicos do Facebook
  postCount: 5, // Quantidade de posts solicitada
  desiredTags: 'tag1,tag2', // Hashtags usadas para filtrar os posts (vazio para todos)
  rawResult: '{...}', // Resposta do serviço, como string
  result: { // Resposta do serviço, como objeto
    time: '2026-10-11 12:00:00', // Quando o resultado foi obtido
    userKey: 'abc123', // Chave da conta conectada
    data: {
      user: {
        id: '1234567890', // ID da conta
        name: 'DSPLAY - Digital Signage', // Nome da conta
        pic: '/path/to/profile/picture', // Foto da página, caminho local
      },
      posts: [
        {
          id: '0987654321', // ID do post
          text: 'Texto do post',
          created: '2018-06-17T17:24:51+0000', // Data de criação do post
          link: 'https://www.facebook.com/example/posts/0987654321', // Link para o post original
          tags: ['myhashtag', 'tag2'], // Hashtags do post (podem não existir)
          reactions: { like: 84, love: 52 }, // Contagem de reações por tipo (like, love, wow, haha, ...)
          shares: 6,
          comments: 3,
          media: [ // Imagens e vídeos do post
            {
              id: '1324354657687980', // ID da mídia
              type: 'image', // 'image' ou 'video'
              urls: { // Caminhos locais da imagem. Apenas a resolução em uso é baixada
                tb: '/path/to/thumbnail',
                sm: '/path/to/small',
                md: '/path/to/medium',
                lg: '/path/to/large',
              },
            },
          ],
        },
      ],
    },
  },
}
```

A resolução baixada é `md`, a menos que o `metadata.json` do template tenha uma chave `resolution` (`tb`, `sm`, `md` ou `lg`).
