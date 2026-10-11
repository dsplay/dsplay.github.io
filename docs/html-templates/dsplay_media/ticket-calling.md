---
parent: dsplay_media
grand_parent: HTML Templates
nav_order: 14
---
# Ticket Calling

Used by the [Chamador Loterias Caixa](https://github.com/dsplay/dsplay-templates/tree/main/templates/chamador-loterias-caixa) template. This is not a media type: the player shows it when a ticket is called through the terminal's ticket calling integration.

```js
var dsplay_media = {
  // All general fields are also included...

  // Ticket Calling specific
  buffer: '42', // Ticket number typed on the keyboard, as a string (the template keeps only the digits)
}
```
