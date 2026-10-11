---
nav_order: 2
parent: Templates HTML
title: dsplay_media
has_children: true
permalink: /pt/docs/html-templates/dsplay_media/
---
# `dsplay_media`

Tudo o que o player sabe sobre a mídia em exibição, em um único objeto (sem aninhamento): campos gerais de todos os tipos de mídia, mais os campos de cada tipo.

```js
var dsplay_media = {
  // Campos gerais (todos os tipos de mídia)
  id: 1, // ID da mídia
  name: 'My Media', // Nome da mídia
  count: 25, // Quantas mídias o player já exibiu até agora
  iteration: 4, // Quantas vezes esta mídia já foi exibida até agora
  duration: 15000, // Duração da mídia em milissegundos
  // campos específicos do tipo...
}
```

Nos valores string, `$` é substituído por `&#36;`. Listas são enviadas como arrays JSON.

## Tipos de mídia

| Mídia | Templates |
|---|---|
| [Imagem](./image) | Image, Photo Collage |
| [Mensagem](./message) | Countdown, Count Up, Wi-Fi, Meeting Room, Flight Information, Building Directions |
| [RSS](./rss) | RSS |
| [Previsão do tempo](./weather) | Weather Forecast |
| [Twitter](./twitter) | Twitter Basic |
| [Instagram](./instagram) | Instagram Basic, Instagram Image Only |
| [Facebook](./facebook) | Facebook Posts |
| [Chamada de senhas](./ticket-calling) | Chamador Loterias Caixa |
| [JSON Service](./json-service) | [Lottery (Brazil)](./lottery-br), [Exchange Rates](./exchange-rates), [Menu Board](./menuboard) |

Mídias de vídeo, áudio, website, YouTube, stream de vídeo e playlist não usam templates.
