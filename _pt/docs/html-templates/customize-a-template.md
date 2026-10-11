---
parent: Templates HTML
nav_order: 2
permalink: /pt/docs/html-templates/customize-a-template.html
title: Customizar um template do sistema
---
# Customizar um template do sistema

Os templates oficiais são templates completos e funcionais: use-os como estão, ajuste-os sem código, ou copie um e altere.

<figure class="fig"><img src="{{ '/assets/images/diagrams/customize-levels.pt.svg' | relative_url }}" alt="Nível 1: template oficial mais variáveis no CMS resultam na sua mídia. Nível 2: copie o código, altere, empacote e envie como um template seu"></figure>

## Nível 1: ajuste sem código

Todo template oficial expõe variáveis (cores, logos, fundos, fontes, ...). No CMS, crie uma mídia, selecione o template e preencha as variáveis dele. O README de cada template as lista. Por exemplo, o [Countdown](https://github.com/dsplay/dsplay-templates/tree/main/templates/countdown):

| Variável | Tipo | O que faz |
|---|---|---|
| `bg_image` | imagem | Imagem de fundo. Tem prioridade sobre as cores quando definida |
| `bg_color_1` | cor | Cor de fundo (a cor de cima, se `bg_color_2` também estiver definida) |
| `bg_color_2` | cor | Segunda cor de fundo, para um degradê |
| `bg_font_color` | cor | Cor do título e da data |

Todos os templates oficiais estão listados em [Exemplos](./examples).

## Nível 2: copie e altere o código

Quando uma variável não basta, copie o template e altere o código dele. Este exemplo deixa o usuário escolher o tamanho do título do Countdown.

### 1. Copie

```sh
npx degit dsplay/dsplay-templates/templates/countdown my-countdown
cd my-countdown
npm install
npm start
```

Você precisa do Node.js 22.22.2+, 24.15.0+ ou 26+. Abra o endereço que o `npm start` imprime (`http://localhost:3000`). As instruções de monorepo do README do template não valem para a sua cópia: rode tudo a partir da pasta dela.

### 2. Encontre o que mudar

- `src/contexts/count-down-context/index.jsx` lê as variáveis com `useTemplateVal('bg_font_color', '')` e chamadas parecidas.
- `src/components/count-down/index.jsx` renderiza o título.

### 3. Adicione uma variável

Em `src/components/count-down/index.jsx`:

{% raw %}
```diff
+import { useTemplateVal } from '@dsplay/react-template-utils';
 ...
+  const titleSize = useTemplateVal('title_size', '');
 ...
-        <h1 style={{ color: colorFont }}>{title}</h1>
+        <h1 style={{ color: colorFont, fontSize: titleSize || undefined }}>{title}</h1>
```
{% endraw %}

### 4. Simule

No `public/dsplay-data.js`, que só existe para o desenvolvimento local:

```js
var dsplay_template = {
  bg_color_1: '#0a1128',
  bg_color_2: '#000000',
  bg_font_color: '#ffffff',
  title_size: '8vh', // novo: o tamanho da fonte do título
};
```

Recarregue a página: o título ficou maior.

<div class="fig-pair"><figure class="fig"><img src="{{ '/assets/images/templates/countdown.jpg' | relative_url }}" alt="O template Countdown oficial"><figcaption>Antes: o Countdown oficial.</figcaption></figure><figure class="fig"><img src="{{ '/assets/images/guides/countdown-big-title.jpg' | relative_url }}" alt="O template Countdown com o título maior"><figcaption>Depois: <code>title_size</code> com <code>8vh</code>.</figcaption></figure></div>

### 5. Empacote

```sh
npm run zip
```

Ele roda o linter, builda o template e cria o `template.zip`. O manifesto dentro dele agora lista `title_size` junto das variáveis originais.

### 6. Envie como um template seu

No [Web Manager](https://manager.dsplay.tv/template/create), crie um template com o tipo de mídia **Countdown**, um nome seu (por exemplo "Countdown, título grande") e o `template.zip`. Depois crie uma mídia Countdown e selecione o seu template.

> Parta de um template do mesmo tipo de mídia que você quer: ele recebe os dados de que você precisa. Veja [`dsplay_media`](./dsplay_media).

## Próximos passos

- [Criar um template do zero](./create-from-scratch)
- [Variáveis de template](./dsplay_template) e [SDKs](./#sdks).
