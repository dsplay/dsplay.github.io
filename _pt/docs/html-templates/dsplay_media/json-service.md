---
parent: dsplay_media
grand_parent: Templates HTML
nav_order: 99
permalink: /pt/docs/html-templates/dsplay_media/json-service.html
title: JSON Service
---
# JSON Service

Como criar um serviço e um template para ele: [JSON Services](../../json-services).

Templates baseados nele: [Lottery (Brazil)](./lottery-br), [Exchange Rates](./exchange-rates) e [Menu Board](./menuboard).

```js
var dsplay_media = {
  // Todos os campos gerais também são incluídos...

  // Específicos do JSON Service
  result: {}, // Resposta do serviço, como objeto
  rawResult: '{}', // A mesma resposta, como string
}
```

A URL do serviço pode usar variáveis `${...}`, expandidas pelo player a cada requisição:
`project.id`, `project.key`, `project.name`, `project.tags.<tag>`, `terminal.name`, `terminal.modified`, `terminal.tags.<tag>`, `terminal.lat` e `terminal.lon`.

O player só exibe o resultado enquanto ele for válido. Um `expiresAt` (ou o legado `validity`) no passado faz a mídia ser pulada, a menos que a resposta tenha `showOutdated: true`. Uma resposta com a chave `error` nunca é exibida.
