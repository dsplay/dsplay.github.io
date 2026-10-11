---
parent: dsplay_media
grand_parent: Templates HTML
nav_order: 15
permalink: /pt/docs/html-templates/dsplay_media/lottery-br.html
title: Loterias (Brasil)
---
# Loterias (Brasil)

Usado pelo template [Loterias Caixa](https://github.com/dsplay/dsplay-templates/tree/main/templates/lottery-br-caixa-economica-federal). É uma media de [JSON Service](./json-service): `iteration` escolhe qual jogo é exibido, entre os presentes em `result.data`.

```js
var dsplay_media = {
  // Todos os campos gerais também estão incluídos...

  // Específicos da Lottery
  result: {
    validity: '2026-09-29T23:28:46.797Z', // Validade do resultado
    showOutdated: true, // Continua exibindo após a validade
    data: {
      // Uma chave por jogo: federal, megasena, duplasena, quina, lotofacil,
      // lotomania, timemania, diadesorte, supersete e loteca
      megasena: {
        validity: '2026-09-29T03:00:00.000Z', // Validade do resultado deste jogo
        valid: true,
        round: { // Último sorteio
          number: 3063, // Número do sorteio
          date: '2026-09-27T03:00:00.000Z', // Data do sorteio
          city: 'SÃO PAULO, SP', // Local do sorteio
          numbers: ['05', '35', '36', '41', '43', '48'], // Números sorteados
          totalCollection: 53206716, // Total arrecadado
          isAccumulated: true, // Se o prêmio acumulou
          accumulated: 43527211.47, // Prêmio acumulado
          prizes: { // Ganhadores e prêmio por categoria (as categorias dependem do jogo)
            sena: { winners: 0, amount: 0 },
            quina: { winners: 29, amount: 73111.35 },
            quadra: { winners: 2642, amount: 1322.81 },
          },
        },
        next: { // Próximo sorteio
          date: '2026-09-29T03:00:00.000Z', // Data do próximo sorteio
          estimatedPrize: 52000000, // Prêmio estimado
        },
      },
    },
  },
}
```

Cada jogo tem seus próprios campos em `round` (ex.: `federal` tem uma lista de `prizes`, `loteca` tem `matches`, `duplasena` tem `numbers1` e `numbers2`). Veja [`public/dsplay-data.js`](https://github.com/dsplay/dsplay-templates/blob/main/templates/lottery-br-caixa-economica-federal/public/dsplay-data.js) para um payload completo.
