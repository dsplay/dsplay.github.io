---
parent: Serviços JSON
nav_order: 1
permalink: /pt/docs/json-services/example.html
title: "Exemplo: serviço hello"
---
# Exemplo: serviço hello

Uma integração completa em duas peças pequenas: um serviço que retorna uma saudação e um template que a exibe.

## O serviço

Um servidor Node.js sem dependências. `GET /?name=DSPLAY` retorna uma saudação válida por um minuto.

```js
const http = require('http');

const TTL_MS = 60 * 1000; // por quanto tempo o player pode usar um resultado

http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const name = url.searchParams.get('name') || 'Mundo';

  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (name.length > 50) {
    // erros também são JSON simples: o player não exibe a mídia e tenta novamente depois
    res.statusCode = 400;
    res.end(JSON.stringify({
      error: { message: 'o nome é muito longo' },
      expiresAt: new Date(Date.now() + 10 * 60 * 1000).toISOString(),
    }));
    return;
  }

  res.end(JSON.stringify({
    expiresAt: new Date(Date.now() + TTL_MS).toISOString(), // quando o player deve buscar novamente
    showOutdated: true, // continua exibindo o último resultado se uma atualização falhar
    data: {
      greeting: `Olá, ${name}!`,
      generatedAt: new Date().toISOString(),
    },
  }));
}).listen(8080);
```

Resposta:

```json
{
  "expiresAt": "2026-10-11T17:35:55.445Z",
  "showOutdated": true,
  "data": {
    "greeting": "Olá, DSPLAY!",
    "generatedAt": "2026-10-11T17:34:55.446Z"
  }
}
```

O serviço precisa estar acessível pelo player pela internet. Para usar um serviço que exige uma chave, adicione-a como header na mídia.

## O template

Parta do [boilerplate vanilla JS](https://github.com/dsplay/dsplay-templates/tree/main/boilerplates/javascript) (ou do de [React](https://github.com/dsplay/dsplay-templates/tree/main/boilerplates/react)). O template lê o `result` da mídia com o [`@dsplay/template-utils`](https://github.com/dsplay/dsplay-templates/tree/main/packages/template-utils):

```js
var u = dsplayTemplateUtils;

var data = u.media.result.data;

document.querySelector('.title').innerHTML = data.greeting;
```

Para desenvolver localmente, simule a resposta do serviço em `scripts/dsplay-data.js`. Em produção, o player a substitui pela resposta real:

```js
var dsplay_media = {
  duration: 15000,

  // Específico do JSON Service
  result: {
    expiresAt: '2030-01-01T00:00:00.000Z',
    showOutdated: true,
    data: {
      greeting: 'Olá, DSPLAY!',
      generatedAt: '2026-10-11T17:34:55.446Z',
    },
  },
};
```

## Como usar

1. Execute o serviço em algum lugar que o player alcance, por exemplo `https://my.service/?name=DSPLAY`.
2. Compacte o template em zip (`npm run zip`) e envie-o pelo CMS.
3. Crie uma mídia JSON Service com a URL do serviço e selecione o template.
4. Adicione a mídia a uma playlist.
