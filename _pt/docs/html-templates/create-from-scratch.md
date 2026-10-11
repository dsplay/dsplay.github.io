---
parent: Templates HTML
nav_order: 1
permalink: /pt/docs/html-templates/create-from-scratch.html
title: Criar um template do zero
---
# Criar um template do zero

Um template é uma página web estática, então você pode construí-lo com React, jQuery, JavaScript puro ou qualquer coisa que gere HTML e JavaScript. Este guia constrói um cartão de boas-vindas cuja mensagem e cores o usuário altera pelo CMS, em poucas linhas de JavaScript.

## Escolha o ponto de partida

| Você usa | Comece por |
|---|---|
| JavaScript puro | [Boilerplate JavaScript](https://github.com/dsplay/dsplay-templates/tree/main/boilerplates/javascript) |
| jQuery | [Boilerplate jQuery](https://github.com/dsplay/dsplay-templates/tree/main/boilerplates/jquery) |
| React | [Boilerplate React](https://github.com/dsplay/dsplay-templates/tree/main/boilerplates/react), com os hooks e componentes do `@dsplay/react-template-utils` |
| Qualquer outra coisa (Vue, Svelte, um gerador de sites estáticos, arquivos simples) | Seu próprio projeto: veja [Qualquer outra stack](#qualquer-outra-stack) |

Você precisa do Node.js 22.22.2+, 24.15.0+ ou 26+.

## Exemplo: um cartão de boas-vindas

Este exemplo usa o boilerplate JavaScript.

### 1. Copie o boilerplate

```sh
npx degit dsplay/dsplay-templates/boilerplates/javascript my-template
cd my-template
npm install
```

> O `npm install` falha com `ETARGET ... with a date before ...`? O `.npmrc` do boilerplate só aceita versões de pacotes publicadas há pelo menos 3 dias, e uma versão recém-lançada do `@dsplay/*` ainda pode estar dentro dessa janela. Espere, ou instale uma vez com `npm install --min-release-age=0`.

### 2. Execute

```sh
npm start
```

Abra `http://localhost:3000` (a URL raiz, não `/index.html`, para o live reload funcionar). A página recarrega quando você salva um arquivo.

<figure class="fig"><img src="{{ '/assets/images/guides/welcome-card.pt.jpg' | relative_url }}" alt="O cartão de boas-vindas rodando no navegador"><figcaption>O cartão de boas-vindas com os valores do `dsplay-data.js`.</figcaption></figure>

### 3. Escreva o template

No `index.html`, troque o conteúdo de `<div id="root">`:

```html
<div id="root">
  <div class="message"></div>
</div>
```

`styles/main.css`:

```css
html, body, #root {
  height: 100%;
  width: 100%;
  margin: 0;
}

#root {
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: sans-serif;
}
```

`scripts/app.js`:

```js
"use strict";

(function () {
  var u = dsplayTemplateUtils;
  var root = document.querySelector('#root');

  document.querySelector('.message').textContent = u.tval('message', 'Welcome!');
  root.style.fontSize = u.tval('font_size', '3em');
  root.style.color = u.tval('text_color', '#ffffff');
  root.style.backgroundColor = u.tval('background_color', '#0a57fe');

  root.style.opacity = 1;
})();
```

`tval(nome, padrão)` lê uma variável de template como string. `tbval`, `tival` e `tfval` leem booleanos, inteiros e decimais.

### 4. Simule os dados

O `scripts/dsplay-data.js` existe só para o desenvolvimento local: em produção o player fornece os dados reais. Troque o `dsplay_template` nele:

```js
var dsplay_template = {
  message: 'Bem-vindo ao DSPLAY!', // o texto do cartão
  background_color: '#0a57fe', // a cor do cartão
  text_color: '#ffffff', // a cor do texto
  font_size: '4em', // o tamanho do texto
};
```

Mude um valor, salve, e a página atualiza.

### 5. Empacote

```sh
npm run zip
```

Isso cria o `template.zip` (com o `index.html` na raiz) e um manifesto com as variáveis encontradas no seu código:

```json
{
  "variables": [
    { "key": "message", "type": "string", "default": "Welcome!" },
    { "key": "font_size", "type": "string", "default": "3em" },
    { "key": "text_color", "type": "string", "default": "#ffffff", "subtypeGuess": "color" },
    { "key": "background_color", "type": "string", "default": "#0a57fe", "subtypeGuess": "color" }
  ]
}
```

### 6. Envie e use

1. No [Web Manager](https://manager.dsplay.tv/template/create), crie um template: escolha o tipo de mídia **Message**, dê um nome e selecione o `template.zip`. O CMS lê as variáveis do manifesto. Veja [Publicação](./#publicação).
2. Crie uma mídia **Message**, selecione seu template e preencha as variáveis: a mensagem, as cores e o tamanho.
3. Adicione a mídia a uma playlist.

## Qualquer outra stack

Um template só precisa de uma pasta com um `index.html` na raiz, referenciando seus arquivos com caminhos relativos (no Vite, `base: './'`).

1. Instale o SDK: `npm i @dsplay/template-utils`, ou carregue com `<script src="https://unpkg.com/@dsplay/template-utils"></script>` (ele expõe `dsplayTemplateUtils`). Para React existe o `@dsplay/react-template-utils`.
2. Leia os dados no seu código:

   ```js
   import { media, config, template, tval } from '@dsplay/template-utils';
   ```

3. Para o desenvolvimento local, inclua um `dsplay-data.js` com dados simulados, como fazem os boilerplates. Veja [Desenvolvimento local](./#desenvolvimento-local-dsplay-datajs).
4. Compacte a saída do build com o `index.html` na raiz do zip:

   ```sh
   cd dist && zip -r ../template.zip .
   ```

5. Registre as variáveis à mão no formulário de criação (**Template Vars**), ou gere o manifesto com o [`@dsplay/template-manifest`](https://github.com/dsplay/dsplay-templates/tree/main/packages/template-manifest).

## Próximos passos

- [`dsplay_media`](./dsplay_media): os dados que cada tipo de mídia entrega ao seu template.
- [Variáveis de template](./dsplay_template) e [SDKs](./#sdks).
- [Serviços JSON](../json-services): alimente seu template com os seus dados.
