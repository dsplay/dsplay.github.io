---
parent: dsplay_media
grand_parent: HTML Templates
nav_order: 15
---
# Lottery (Brazil)

Used by the [Loterias Caixa](https://github.com/dsplay/dsplay-templates/tree/main/templates/lottery-br-caixa-economica-federal) template. It is a [JSON Service](./json-service) media: `iteration` picks which game is shown, among the ones present in `result.data`.

```js
var dsplay_media = {
  // All general fields are also included...

  // Lottery specific
  result: {
    validity: '2026-09-29T23:28:46.797Z', // Result validity
    showOutdated: true, // Keep showing after the validity
    data: {
      // One key per game: federal, megasena, duplasena, quina, lotofacil,
      // lotomania, timemania, diadesorte, supersete and loteca
      megasena: {
        validity: '2026-09-29T03:00:00.000Z', // Validity of this game's result
        valid: true,
        round: { // Last draw
          number: 3063, // Draw number
          date: '2026-09-27T03:00:00.000Z', // Draw date
          city: 'SÃO PAULO, SP', // Draw location
          numbers: ['05', '35', '36', '41', '43', '48'], // Drawn numbers
          totalCollection: 53206716, // Total collected
          isAccumulated: true, // Whether the prize accumulated
          accumulated: 43527211.47, // Accumulated prize
          prizes: { // Winners and prize per category (the categories depend on the game)
            sena: { winners: 0, amount: 0 },
            quina: { winners: 29, amount: 73111.35 },
            quadra: { winners: 2642, amount: 1322.81 },
          },
        },
        next: { // Next draw
          date: '2026-09-29T03:00:00.000Z', // Next draw date
          estimatedPrize: 52000000, // Estimated prize
        },
      },
    },
  },
}
```

Each game has its own `round` fields (e.g. `federal` has a list of `prizes`, `loteca` has `matches`, `duplasena` has `numbers1` and `numbers2`). See [`public/dsplay-data.js`](https://github.com/dsplay/dsplay-templates/blob/main/templates/lottery-br-caixa-economica-federal/public/dsplay-data.js) for a full payload.
