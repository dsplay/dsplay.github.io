---
parent: dsplay_media
grand_parent: Templates HTML
nav_order: 14
permalink: /pt/docs/html-templates/dsplay_media/ticket-calling.html
title: Chamada de senhas
---
# Chamada de senhas

Usado pelo template [Chamador Loterias Caixa](https://github.com/dsplay/dsplay-templates/tree/main/templates/chamador-loterias-caixa). Não é um tipo de media: o player o exibe quando uma senha é chamada pela integração de chamada de senhas do terminal.

```js
var dsplay_media = {
  // Todos os campos gerais também estão incluídos...

  // Específicos do Ticket Calling
  buffer: '42', // Número da senha digitado no teclado, como string (o template mantém apenas os dígitos)
}
```
