---
parent: dsplay_media
grand_parent: HTML Templates
nav_order: 99
---
# JSON Service

Templates built on it: [Lottery (Brazil)](./lottery-br), [Exchange Rates](./exchange-rates) and [Menu Board](./menuboard).

```js
var dsplay_media = {
  // All general fields are also included...

  // JSON Service specific
  result: {}, // The service response, as an object
  rawResult: '{}', // The same response, as a string
}
```

The service URL may use `${...}` variables, expanded by the player on each request:
`project.id`, `project.key`, `project.name`, `project.tags.<tag>`, `terminal.name`, `terminal.modified`, `terminal.tags.<tag>`, `terminal.lat` and `terminal.lon`.

The player only shows the result while it is valid. An `expiresAt` (or legacy `validity`) in the past makes the media skip, unless the response has `showOutdated: true`. A response with an `error` key is never shown.
